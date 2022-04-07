import { useState } from "react";
import { useProductContext } from "../../context/ProductContext";
import "./ProductFilter.css";
import { ProductFilterSub } from "./ProductFilterSub";

const ProductFilter = () => {
	const [mobileSidebar, setMobileSidebar] = useState(false);
	const { productDispatch } = useProductContext();
	const resetFilter = () => {
		productDispatch({ type: "RESET_FILTER" });
	};
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
						<button className="btn btn-text" onClick={() => resetFilter()}>
							clear all
						</button>
					</div>
				</div>
				<div className={mobileSidebar ? "mobile-sidebar" : "desktop-sidebar"}>
					<div className="flex">
						<button
							className="btn btn-text"
							onClick={() => {
								mobileSidebar && setMobileSidebar(false);
								resetFilter();
							}}
						>
							clear all
						</button>
						{mobileSidebar && (
							<button
								className="btn btn-text"
								onClick={() => {
									setMobileSidebar(false);
								}}
							>
								close
							</button>
						)}
					</div>
					<hr />
					{/* product filter sub contain all filter */}
					<ProductFilterSub />
				</div>
			</div>
		</>
	);
};

export { ProductFilter };
