import "./CartProductCard.css";
const CartProductCard = () => {
	return (
		<div class="card horizontal-card">
			<img
				class="card-img-container horizontal-card-image "
				src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14971104/2021/7/29/e894ad8a-2c03-44ff-98ac-f0e9226ddc7f1627553869161AfroJackMenGreen1.jpg"
			/>
			<div class="card-body">
				<h2 class="card-heading">Running shoes</h2>
				<h3 class="card-subheading">by Nike</h3>
				<p class="pv-1">
					<span class="typo-label">Rs. 1499 </span>
					<span class="typo-subtext text-line-through">Rs 5999</span>
					<span class="typo-subtext text-primary">75% off</span>
				</p>
				<div class="item-counter">
					<div class="typo-subtext temo1">Quantity: </div>
					<div class="flex-hz-space-bw full-width">
						<button class="btn btn-outlined">
							<i class="fa fa-minus" aria-hidden="true"></i>
						</button>
						<p class="typo-label">1</p>
						<button class="btn btn-outlined ">
							<i class="fa fa-plus" aria-hidden="true"></i>
						</button>
					</div>
				</div>
				<div class="card-footer-btn">
					<button class="btn btn-primary">Move to wishlist</button>
					<button class="btn btn-outlined">Remove</button>
				</div>
			</div>
		</div>
	);
};

export { CartProductCard };
