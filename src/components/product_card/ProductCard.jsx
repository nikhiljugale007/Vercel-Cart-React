import "./ProductCard.css";
import {
	addToWishlist,
	removeFromWishlist,
	addToCart,
} from "../../api/apicall";
import { useProductContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";
const ProductCard = ({ card_type, product }) => {
	const { _id, title, brand, image_src, price, original_price, rating } =
		product;
	const { productState, productDispatch } = useProductContext();

	const addItemToWishlist = async () => {
		const response = await addToWishlist(product);
		response.success
			? productDispatch({ type: "SET_WISHLIST", payload: response.wishlist })
			: productDispatch({ type: "SET_WISHLIST", payload: [] });
	};

	const addItemToCart = async () => {
		const response = await addToCart(product);
		response.success
			? productDispatch({ type: "SET_CART", payload: response.cart })
			: productDispatch({ type: "SET_CART", payload: [] });
	};
	const removeItemFromWishlist = async () => {
		const response = await removeFromWishlist(_id);
		response.success
			? productDispatch({ type: "SET_WISHLIST", payload: response.wishlist })
			: productDispatch({ type: "SET_WISHLIST", payload: [] });
	};

	const checkItemInWishlist = () =>
		productState.wishlist.find((item) => item._id === _id);

	const checkItemInCart = () =>
		productState.cart.find((item) => item._id === _id);
	return (
		<>
			<div className="card">
				<div className="badge-image-container">
					<span className="text-badge ecommerce-chip-left"> Trending </span>
					<img
						className="card-img-container img-responsive"
						src={image_src}
						alt="footware"
					/>

					{card_type === "wishlist_card" ? (
						<button
							className="btn  btn-icon ecommerce-chip-right"
							onClick={removeItemFromWishlist}
						>
							<i className="fa fa-times-circle fa-2x " aria-hidden="true"></i>
						</button>
					) : checkItemInWishlist() ? (
						<button
							className="btn  btn-icon ecommerce-chip-right wishlisted"
							onClick={removeItemFromWishlist}
						>
							<i className="fa fa-heart" aria-hidden="true"></i>
						</button>
					) : (
						<button
							className="btn  btn-icon ecommerce-chip-right"
							onClick={addItemToWishlist}
						>
							<i className="fa fa-heart" aria-hidden="true"></i>
						</button>
					)}
				</div>
				<div className="card-body">
					<p className="typo-label">{title}</p>
					<div className="flex-hz-space-bw">
						<p className="typo-subtext">Sold By : {brand}</p>
						<div className="star-rating-view">
							<span className="rating-text">{rating}</span>
							<span className="rating-icon">
								<i className="fa fa-star fa-md" aria-hidden="true"></i>
							</span>
							<span className="rating-text">|</span>
							<span className="rating-text">5</span>
						</div>
					</div>
					<p className="typo-subtext text-bold">
						Rs. {price}
						<span className="typo-subtext text-line-through">
							Rs {original_price + "   "}
						</span>
						<span className="typo-subtext text-primary">
							{Math.round(((original_price - price) / original_price) * 100)}%
							off
						</span>
					</p>

					<div className="card-footer-container ecommerce-card-footer">
						{checkItemInCart() ? (
							<Link to="/cart" className="link-no-style">
								<button className="btn btn-outlined full-width">
									GO TO CART
								</button>
							</Link>
						) : (
							<button
								className="btn btn-outlined full-width"
								onClick={addItemToCart}
							>
								ADD TO CART
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
export { ProductCard };
