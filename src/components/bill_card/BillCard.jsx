import { useProductContext } from "../../context/ProductContext";
import "./BillCard.css";
import { useState, useEffect } from "react";
const BillCard = () => {
	const { productState } = useProductContext();
	const [bill, setBill] = useState({});
	const billReducer = (acc, curr) => {
		acc.totalOriginalPrice += curr.original_price * curr.qty;
		acc.totalPrice += curr.price * curr.qty;
		return acc;
	};
	useEffect(() => {
		const temp_bill = productState.cart.reduce(billReducer, {
			totalPrice: 0,
			totalOriginalPrice: 0,
			deliveryCharges: 100,
			coupanDiscout: 10,
		});
		setBill(temp_bill);
	}, [productState]);
	return (
		<div class="card bill-card">
			<div class="card-body">
				<p class="typo-label">Price Details</p>
			</div>
			<hr />
			<div class="card-body">
				<div class="bill-item">
					<p class="typo-subtext">
						Price {`( ${productState.cart.length} items)`}
					</p>
					<p class="typo-subtext">Rs {bill.totalPrice}</p>
				</div>

				<div class="bill-item">
					<p class="typo-subtext">Original Price</p>
					<p class="typo-subtext">Rs {bill.totalOriginalPrice}</p>
				</div>
				<div class="bill-item">
					<p class="typo-subtext">Delivery charges</p>
					<p class="typo-subtext">Rs {bill.deliveryCharges}</p>
				</div>
				<hr />
				<div class="bill-item">
					<p class="typo-subtext text-bold">Total Amount</p>
					<p class="typo-subtext">
						Rs {bill.totalPrice + bill.deliveryCharges}
					</p>
				</div>
				<hr />
				<div class="bill-item">
					<p class="typo-label typo-subtext">
						<i class="fas fa-tags"></i>
						Use Coupon
					</p>
					<button class="btn btn-success p-0">Apply</button>
				</div>
				<hr />

				<div class="bill-item-vertical">
					<p class="typo-subtext">
						You will save Rs {bill.totalOriginalPrice - bill.totalPrice} on this
						order
					</p>
					<div class="bill-item">
						<button class="btn btn-primary full-width ">Place Order</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export { BillCard };
