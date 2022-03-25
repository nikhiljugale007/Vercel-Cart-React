import "./Product.css";
import { useEffect } from "react";
import { ProductFilter, ProductCard } from "../../components";
import { useProductContext } from "../../context/ProductContext";
import { getAllProducts } from "../../api/apicall";

const Product = () => {
	const { filteredData, productDispatch } = useProductContext();

	useEffect(() => {
		const getData = async () => {
			const response = await getAllProducts();

			response.success
				? productDispatch({ type: "SET_PRODUCTS", payload: response.products })
				: productDispatch({ type: "SET_PRODUCTS", payload: [] });
		};
		getData();
	}, []);
	return (
		<div className="product-page full-width">
			<ProductFilter />
			<div className="product-section">
				<div className="grid grid-4-responsive">
					{filteredData.map((product, index) => (
						<div key={index}>
							<ProductCard product={product} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export { Product };
