import React, { useEffect, useState } from "react";
import "./ProductCard.css";

const ProductCard = () => {
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
					<button className="btn btn-icon ecommerce-chip-right wishlisted">
						<i className="fa fa-heart" aria-hidden="true"></i>
					</button>
				</div>
				<div className="card-body">
					<p className="typo-label">Semi formal shoes</p>
					<div className="flex-hz-space-bw">
						<p className="typo-subtext">Sold By : Red Tape</p>
						<div className="star-rating-view">
							<span className="rating-text">4.4</span>
							<span className="rating-icon">
								<i className="fa fa-star fa-md" aria-hidden="true"></i>
							</span>
							<span className="rating-text">|</span>
							<span className="rating-text">5</span>
						</div>
					</div>
					<p className="text-bold">
						Rs. 1499
						<span className="typo-subtext text-line-through">Rs 5999</span>
						<span className="typo-subtext text-primary">75% off</span>
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
