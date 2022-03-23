import "./Wishlist.css";
import { ProductCard } from "../../components";
const Wishlist = () => {
	return (
		<div className="wishlist-page">
			<p className="typo-title flex-hz-center p-1">My Cart</p>
			<div class="grid grid-4-responsive">
				<ProductCard card_type={"wishlist_card"} />
				<ProductCard card_type={"wishlist_card"} />
				<ProductCard card_type={"wishlist_card"} />
				<ProductCard card_type={"wishlist_card"} />
				<ProductCard card_type={"wishlist_card"} />
			</div>
		</div>
	);
};

export { Wishlist };
