import "./Wishlist.css";
import { ProductCard } from "../../components";
import { useEffect } from "react";
import { getWishlist } from "../../api/apicall";
import { useProductContext } from "../../context/ProductContext";
const Wishlist = () => {
	const { productState, productDispatch } = useProductContext();

	useEffect(() => {
		const getWishlistData = async () => {
			const response = await getWishlist();
			response.success
				? productDispatch({ type: "SET_WISHLIST", payload: response.wishlist })
				: productDispatch({ type: "SET_WISHLIST", payload: [] });
		};
		getWishlistData();
	}, [productDispatch]);
	return (
		<div className="wishlist-page">
			<p className="typo-title flex-hz-center p-2">
				My Wishlist {"(" + productState.wishlist.length + " items)"}
			</p>
			<div className="grid grid-4-responsive">
				{productState.wishlist.map((product) => (
					<ProductCard card_type={"wishlist_card"} product={product} />
				))}
			</div>
		</div>
	);
};

export { Wishlist };
