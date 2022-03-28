import "./CartProductCard.css";
import {
	removeFromCart,
	addToWishlist,
	changeQuantity,
} from "../../api/apicall";
import { useProductContext } from "../../context/ProductContext";
import { Toast } from "../toast/Toast";
import { useState } from "react";
const CartProductCard = ({ product }) => {
	const { _id, title, brand, image_src, price, original_price, qty } = product;
	const { productDispatch, productState } = useProductContext();
	const [toast, setToast] = useState({ label: "", val: false });
	const setError = () => {
		setToast((prev) => ({ ...prev, label: "Some Error Occured", val: true }));
		setTimeout(() => {
			setToast((prev) => ({ ...prev, label: "", val: false }));
		}, 2000);
	};
	const removeItemToCart = async () => {
		setToast((prev) => ({ label: "Removing from Cart", val: true }));
		const response = await removeFromCart(_id);
		if (response.success) {
			productDispatch({ type: "SET_CART", payload: response.cart });
			setTimeout(() => {
				setToast((prev) => ({ label: "", val: false }));
			}, 1000);
		} else {
			setError();
			productDispatch({ type: "SET_CART", payload: [] });
		}
	};
	const addItemToWishlist = async () => {
		setToast((prev) => ({ label: "Adding To Wishlist", val: true }));
		const response = await addToWishlist(product);
		if (response.success) {
			productDispatch({ type: "SET_WISHLIST", payload: response.wishlist });
			setTimeout(() => {
				setToast((prev) => ({ label: "", val: false }));
			}, 1000);
		} else {
			productDispatch({ type: "SET_WISHLIST", payload: [] });
		}
	};
	const quanityChangeHandler = async (type) => {
		if (type === "increment" || (type === "decrement" && qty > 0)) {
			const response = await changeQuantity(_id, type);
			response.success
				? productDispatch({ type: "SET_CART", payload: response.cart })
				: productDispatch({ type: "SET_CART", payload: [] });
		}
	};

	const checkItemInWishlist = () =>
		productState.wishlist.find((item) => item._id === _id);

	return (
		<>
			{toast.val && <Toast label={toast.label} />}
			<div className="card horizontal-card">
				<img
					className="card-img-container horizontal-card-image "
					src={image_src}
					alt="shoes"
				/>
				<div className="card-body">
					<h2 className="card-heading">{title}</h2>
					<h3 className="card-subheading">by {brand}</h3>
					<p className="pv-1 flex-hz">
						<p className="typo-label">Rs. {price}</p>
						<p className="typo-subtext text-line-through">
							Rs {original_price}
						</p>
						<p className="typo-subtext text-primary">
							{Math.round(((original_price - price) / original_price) * 100)} %
							off
						</p>
					</p>
					<div className="item-counter">
						<p className="typo-subtext temo1">Quantity: </p>
						<div className="flex-hz-space-bw full-width">
							<button
								className={`btn btn-outlined ${qty < 1 ? "btn-disable" : ""}`}
								onClick={() => quanityChangeHandler("decrement")}
							>
								<i className="fa fa-minus" aria-hidden="true"></i>
							</button>
							<p className="typo-label">{qty}</p>
							<button
								className="btn btn-outlined"
								onClick={() => quanityChangeHandler("increment")}
							>
								<i className="fa fa-plus" aria-hidden="true"></i>
							</button>
						</div>
					</div>
					<div className="card-footer-btn">
						{checkItemInWishlist() ? (
							<button className="btn btn-primary">Already Wishlisted</button>
						) : (
							<button className="btn btn-primary" onClick={addItemToWishlist}>
								Move to wishlist
							</button>
						)}
						<button className="btn btn-outlined" onClick={removeItemToCart}>
							Remove
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export { CartProductCard };
