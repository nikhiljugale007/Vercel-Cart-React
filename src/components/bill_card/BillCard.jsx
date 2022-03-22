import "./BillCard.css";
const BillCard = () => {
	return (
		<div class="card bill-card">
			<div class="card-body">
				<p class="typo-label">Price Details</p>
			</div>
			<hr />
			<div class="card-body">
				<div class="bill-item">
					<p class="typo-subtext">Price (2 Items)</p>
					<p class="typo-subtext">Rs 3998</p>
				</div>

				<div class="bill-item">
					<p class="typo-subtext">Discount</p>
					<p class="typo-subtext">- Rs 1000</p>
				</div>
				<div class="bill-item">
					<p class="typo-subtext">Dilevery charges</p>
					<p class="typo-subtext">Rs 199</p>
				</div>
				<hr />
				<div class="bill-item">
					<p class="typo-subtext text-bold">Total Amount</p>
					<p class="typo-subtext">Rs 4198</p>
				</div>
				<hr />
				<div class="bill-item">
					<p class="typo-label typo-subtext">
						<i class="fas fa-tags"></i>
						Use coupan
					</p>
					<button class="btn btn-success p-0">Apply</button>
				</div>
				<hr />

				<div class="bill-item-vertical">
					<p class="typo-subtext">You will save Rs 1000 on this order</p>
					<div class="bill-item">
						<button class="btn btn-primary full-width ">Place Order</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export { BillCard };
