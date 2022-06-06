import { useProductContext } from "../../context/ProductContext";
import "./BillCard.css";
import { useState, useEffect } from "react";
import { AddressListModal } from "../address_list_modal/AddressListModal";
const BillCard = () => {
  const { productState } = useProductContext();
  const [bill, setBill] = useState({});
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [openAdrressList, setOpenAddressList] = useState(false);
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

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    } else {
      const options = {
        key: "rzp_test_vFvcEGlrEqFgxu",
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_SECRET,
        amount: 1000,
        currency: "INR",
        name: "Vercel Store",
        description: "Thank you for shopping with us",
        callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
        prefill: {
          name: "Nikhil",
          email: "john@gmail.com",
          contact: "9999999999",
        },
        notes: { address: "Razorpay Corporate Office" },
        theme: { color: "#202528" },
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
      rzp1.on("payment.failed", function (response) {
        console.error(response.error.code);
      });
    }
  }

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
        {openAdrressList && (
          <AddressListModal
            setOpenAddressList={setOpenAddressList}
            setSelectedAddress={setSelectedAddress}
          />
        )}
        <div className="bill-item">
          <p className="typo-label typo-subtext">
            <i className="fas fa-tags"></i>
            {"  Deliver to"}
          </p>
          <button
            className="btn btn-outlined p-0"
            onClick={() => setOpenAddressList(true)}
          >
            change
          </button>
        </div>
        <div>
          {selectedAddress === null ? (
            <p className="typo-subtext">Please select a address</p>
          ) : (
            <div className="address-container">
              <p className="typo-subtext text-bold">{selectedAddress.name}</p>
              <p>
                {selectedAddress.addressLine1 +
                  " , " +
                  selectedAddress.city +
                  " , " +
                  selectedAddress.country}
              </p>
            </div>
          )}
        </div>
        <hr />

        <div className="bill-item-vertical">
          <p className="typo-subtext">
            You will save Rs {bill.totalOriginalPrice - bill.totalPrice} on this
            order
          </p>
          <div className="bill-item">
            <button
              className="btn btn-primary full-width "
              onClick={displayRazorpay}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export { BillCard };
