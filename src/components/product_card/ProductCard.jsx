import "./ProductCard.css";
const ProductCard = ({ card_type, product }) => {
	const { title, brand, price, original_price, rating } = product;
	return (
		<>
			<div className="card">
				<div className="badge-image-container">
					<span className="text-badge ecommerce-chip-left"> Trending </span>
					<img
						className="card-img-container img-responsive"
						src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16859196/2022/1/18/bcc4d322-6227-4601-a5f4-44dee3aafd551642484853447ALDOMenWhiteColourblockedSneakers1.jpg"
						alt="footware"
					/>
					<button className="btn btn-icon ecommerce-chip-right wishlist">
						{card_type === "wishlist_card" ? (
							<i class="fa fa-times-circle fa-2x " aria-hidden="true"></i>
						) : (
							<i className="fa fa-heart" aria-hidden="true"></i>
						)}
					</button>
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
					<p className="text-bold">
						Rs. {price}
						<span className="typo-subtext text-line-through">
							Rs {original_price + "   "}
						</span>
						<span className="typo-subtext text-primary">
							{((original_price - price) / price) * 100}% off
						</span>
					</p>

					<div className="card-footer-container ecommerce-card-footer">
						<button className="btn btn-outlined full-width">ADD TO CART</button>
					</div>
				</div>
			</div>
		</>
	);
};
export { ProductCard };
