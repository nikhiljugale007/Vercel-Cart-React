import { createContext, useContext, useReducer } from "react";
import { productReducerFunction } from "./ProductReducerFunction";
import { getFilteredData } from "./ProductFilterFunction";

const ProductContext = createContext();

const initialContextValue = {
	products: [],
	wishlist: [],
	cart: [],
	categories: ["Formal Shoes", "Casual Shoes", "Running Shoes"],
	dataFilter: {
		includeOutOfStock: true,
		sortByPrice: null,
		categories: [],
		rating: 0,
		minPrice: 0,
		maxPrice: 1000,
	},
};

const ProductContextProvider = ({ children }) => {
	const [productState, productDispatch] = useReducer(
		productReducerFunction,
		initialContextValue
	);
	const filteredData = getFilteredData(
		productState.products,
		productState.dataFilter
	);
	return (
		<ProductContext.Provider
			value={{ filteredData, productState, productDispatch }}
		>
			{children}
		</ProductContext.Provider>
	);
};

const useProductContext = () => useContext(ProductContext);

export { ProductContextProvider, useProductContext, initialContextValue };
