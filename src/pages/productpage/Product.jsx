import "./Product.css";
import { ProductFilter, ProductCard } from "../../components";
const Product = () => {
	return (
		<div className="product-page full-width">
			<ProductFilter />

			<div className="product-section">
				<div className="grid grid-4-responsive">
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</div>
		</div>
	);
};

export { Product };
