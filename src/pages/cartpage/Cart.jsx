import "./Cart.css";
import { CartProductCard, BillCard } from "../../components";
import { useEffect } from "react";
import { getCart } from "../../api/apicall";
import { useProductContext } from "../../context/ProductContext";
const Cart = () => {
	const { productState, productDispatch } = useProductContext();

	useEffect(() => {
		const getCartData = async () => {
			const response = await getCart();
			response.success
				? productDispatch({ type: "SET_CART", payload: response.cart })
				: productDispatch({ type: "SET_CART", payload: [] });
		};
		getCartData();
	}, [productDispatch]);
	return (
		<div className="cart-page">
			<p className="typo-title flex-hz-center p-2">
				My Cart {`( ${productState.cart.length} items)`}
			</p>
			<div class="grid grid-2x2">
				<div class="item-section">
					{productState.cart.map((product, index) => (
						<CartProductCard product={product} key={index} />
					))}
				</div>
				<div class="bill-section">
					<BillCard />
				</div>
			</div>
		</div>
	);
};

export { Cart };
