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
		<div className="card bill-card">
			<div className="card-body">
				<p className="typo-label">Price Details</p>
			</div>
			<hr />
			<div className="card-body">
				<div className="bill-item">
					<p className="typo-subtext">
						Price {`( ${productState.cart.length} items)`}
					</p>
					<p className="typo-subtext">Rs {bill.totalPrice}</p>
				</div>

				<div className="bill-item">
					<p className="typo-subtext">Original Price</p>
					<p className="typo-subtext">Rs {bill.totalOriginalPrice}</p>
				</div>
				<div className="bill-item">
					<p className="typo-subtext">Delivery charges</p>
					<p className="typo-subtext">Rs {bill.deliveryCharges}</p>
				</div>
				<hr />
				<div className="bill-item">
					<p className="typo-subtext text-bold">Total Amount</p>
					<p className="typo-subtext">
						Rs {bill.totalPrice + bill.deliveryCharges}
					</p>
				</div>
				<hr />
				<div className="bill-item">
					<p className="typo-label typo-subtext">
						<i className="fas fa-tags"></i>
						Use Coupon
					</p>
					<button className="btn btn-success p-0">Apply</button>
				</div>
				<hr />

				<div className="bill-item-vertical">
					<p className="typo-subtext">
						You will save Rs {bill.totalOriginalPrice - bill.totalPrice} on this
						order
					</p>
					<div className="bill-item">
						<button className="btn btn-primary full-width ">Place Order</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export { BillCard };
