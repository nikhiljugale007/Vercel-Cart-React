import { useState } from "react";
import "./ProductFilter.css";
const ProductFilter = () => {
	const [mobileSidebar, setMobileSidebar] = useState(false);
	const categoryOptions = [
		"Formal Shoes",
		"Casual Shoes",
		"Festival Shoes",
		"Running Shoes",
	];
	const ratingOptions = [5, 4, 3, 2, 1];

	return (
		<>
			<div className="sidebar-section">
				<div className="mobile-bottom-sidbar">
					<div className="flex-hz-space-bw">
						<button
							className="btn btn-text"
							onClick={() => setMobileSidebar(true)}
						>
							Filter
						</button>
						<button
							className="btn btn-text"
							onClick={() => setMobileSidebar(false)}
						>
							clear all
						</button>
					</div>
				</div>
				{mobileSidebar && (
					<div className="mobile-sidebar">
						<div className="flex-hz-space-bw p-2">
							<div
								className="btn btn-text"
								onClick={() => setMobileSidebar(false)}
							>
								Apply
							</div>
							<button
								className="btn btn-text"
								onClick={() => setMobileSidebar(false)}
							>
								clear all
							</button>
						</div>
						<hr />
						<div className="list">
							<label className="typo-bold" htmlFor="volume">
								Price
							</label>
							<div className="slider-container">
								<label className="typo-subtext" htmlFor="volume">
									200
								</label>
								<input
									type="range"
									id="volume"
									name="volume"
									min="200"
									max="5000"
								/>
								<label className="typo-subtext" htmlFor="volume">
									5000
								</label>
							</div>
						</div>
						<hr />
						<ul className="list list-style-nostyle">
							<p className="text-bold">Category</p>
							<li className="list-item">
								<label>
									<input type="checkbox" />
									<span>Formal Shoes</span>
								</label>
							</li>
							<li className="list-item">
								<label>
									<input type="checkbox" />
									<span>Casual Shoes</span>
								</label>
							</li>
							<li className="list-item">
								<label>
									<input type="checkbox" />
									<span>Wedding shoes</span>
								</label>
							</li>
						</ul>
						<hr />
						<ul className="list list-style-nostyle">
							<p className="text-bold">Rating</p>
							<li className="list-item">
								<label>
									<input type="radio" name="rating" />
									<span>4 Star & above</span>
								</label>
							</li>
							<li className="list-item">
								<label>
									<input type="radio" name="rating" />
									<span>3 Star & above</span>
								</label>
							</li>
							<li className="list-item">
								<label>
									<input type="radio" name="rating" />
									<span>2 Star & above</span>
								</label>
							</li>
							<li className="list-item">
								<label>
									<input type="radio" name="rating" />
									<span>1 Star & above</span>
								</label>
							</li>
						</ul>
						<hr />
						<ul className="list list-style-nostyle">
							<p className="text-bold">Sort By</p>
							<li className="list-item">
								<label>
									<input type="radio" name="rating" />
									<span>Price - Low to High</span>
								</label>
							</li>
							<li className="list-item">
								<label>
									<input type="radio" name="rating" />
									<span>Price - High to Low</span>
								</label>
							</li>
						</ul>
					</div>
				)}
				<div className="desktop-sidebar">
					<div className="flex-hz-space-bw p-1">
						<div className="btn btn-text">Apply</div>
						<button className="btn btn-text">clear all</button>
					</div>
					<hr />
					{/* price range filter */}
					<div className="list">
						<label className="typo-bold" htmlFor="volume">
							Price
						</label>
						<div className="slider-container">
							<label className="typo-subtext" htmlFor="volume">
								0
							</label>
							<input
								type="range"
								id="volume"
								name="volume"
								min="0"
								max="1000"
							/>
							<label className="typo-subtext" htmlFor="volume">
								1000
							</label>
						</div>
					</div>
					<hr />
					{/* category filter */}
					<ul className="list list-style-nostyle">
						<p className="text-bold">Category</p>
						{categoryOptions.map((option, index) => (
							<li className="list-item" key={index}>
								<label>
									<input type="checkbox" value={option} />
									<span style={{ paddingLeft: "5px" }}>{option}</span>
								</label>
							</li>
						))}
					</ul>
					<hr />
					{/* rating filter */}
					<ul className="list list-style-nostyle">
						<p className="text-bold">Rating</p>
						{ratingOptions.map((option, index) => (
							<li className="list-item" key={index}>
								<label>
									<input type="radio" value={option} name="rating" />
									<span style={{ paddingLeft: "5px" }}>
										{option} Star & above
									</span>
								</label>
							</li>
						))}
					</ul>
					<hr />
					{/* price sort filter */}
					<ul className="list list-style-nostyle">
						<p className="text-bold">Sort By</p>
						<li className="list-item">
							<label>
								<input
									id="priceHighToLow"
									name="sort"
									value="HIGH_TO_LOW"
									type="radio"
								/>
								<span style={{ paddingLeft: "5px" }}>Price - Low to High</span>
							</label>
						</li>
						<li className="list-item">
							<label>
								<input
									id="priceLowToHigh"
									name="sort"
									value="LOW_TO_HIGH"
									type="radio"
								/>
								<span style={{ paddingLeft: "5px" }}>Price - High to Low</span>
							</label>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export { ProductFilter };
