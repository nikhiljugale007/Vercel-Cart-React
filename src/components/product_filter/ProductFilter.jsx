import { useState } from "react";
import "./ProductFilter.css";
import { ProductFilter_Sub } from "./ProductFilter_Sub";
const ProductFilter = () => {
	const [mobileSidebar, setMobileSidebar] = useState(false);

	return (
		<>
			<div className="sidebar-section">
				{/* mobile bottom bar */}
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
						<div className="flex-hz-space-bw">
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
						{/* product filter sub contain all filter */}
						<ProductFilter_Sub />
					</div>
				)}
				<div className="desktop-sidebar">
					<div className="flex-hz-space-bw ">
						<div className="btn btn-text">Apply</div>
						<button className="btn btn-text">clear all</button>
					</div>
					<hr />
					{/* product filter sub contain all filter */}

					<ProductFilter_Sub />
				</div>
			</div>
		</>
	);
};

export { ProductFilter };
