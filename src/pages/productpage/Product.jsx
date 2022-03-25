import "./Product.css";
import { ProductFilter, ProductCard } from "../../components";
import { useProductContext } from "../../context/ProductContext";
const Product = () => {
	const { filteredData } = useProductContext();
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
