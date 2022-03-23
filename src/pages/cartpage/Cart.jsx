import "./Cart.css";
import { CartProductCard, BillCard } from "../../components";
const Cart = () => {
	return (
		<div>
			<p className="typo-title flex-hz-center m-1">My Cart</p>
			<div class="grid grid-2x2">
				<div class="item-section">
					<CartProductCard />
					<CartProductCard />
					<CartProductCard />
					<CartProductCard />
					<CartProductCard />
					<CartProductCard />
					<CartProductCard />
					<CartProductCard />
				</div>
				<div class="bill-section">
					<BillCard />
				</div>
			</div>
		</div>
	);
};

export { Cart };