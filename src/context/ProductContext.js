import { createContext, useContext, useReducer } from "react";
import { productReducerFunction } from "./ProductReducerFunction";
import { data } from "./data";
import { getFilteredData } from "./ProductFilterFunction";

const ProductContext = createContext();

const initialContextValue = {
	products: data,
	wishlist: [],
	cart: [],
	categories: ["Formal Shoes", "Casual Shoes", "Running Shoes"],
	dataFilter: {
		includeOutOfStock: true,
		sortByPrice: null,
		categories: [],
		rating: 0,
		minPrice: 0,
		maxPrice: null,
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

export { ProductContextProvider, useProductContext };
