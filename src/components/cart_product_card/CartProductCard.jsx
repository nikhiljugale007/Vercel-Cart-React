import "./CartProductCard.css";
const CartProductCard = ({ product }) => {
	const { title, brand, price, original_price } = product;

	return (
		<div className="card horizontal-card">
			<img
				className="card-img-container horizontal-card-image "
				src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14971104/2021/7/29/e894ad8a-2c03-44ff-98ac-f0e9226ddc7f1627553869161AfroJackMenGreen1.jpg"
				alt="shoes"
			/>
			<div className="card-body">
				<h2 className="card-heading">{title}</h2>
				<h3 className="card-subheading">by {brand}</h3>
				<p className="pv-1 flex-hz">
					<p className="typo-label">Rs. {price}</p>
					<p className="typo-subtext text-line-through">Rs {original_price}</p>
					<p className="typo-subtext text-primary">
						{Math.round(((original_price - price) / original_price) * 100)} %
						off
					</p>
				</p>
				<div className="item-counter">
					<p className="typo-subtext temo1">Quantity: </p>
					<div className="flex-hz-space-bw full-width">
						<button className="btn btn-outlined">
							<i className="fa fa-minus" aria-hidden="true"></i>
						</button>
						<p className="typo-label">1</p>
						<button className="btn btn-outlined ">
							<i className="fa fa-plus" aria-hidden="true"></i>
						</button>
					</div>
				</div>
				<div className="card-footer-btn">
					<button className="btn btn-primary">Move to wishlist</button>
					<button className="btn btn-outlined">Remove</button>
				</div>
			</div>
		</div>
	);
};

export { CartProductCard };
