import { useProductContext } from "../../context/ProductContext";
import "./BillCard.css";
import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";
import { AddressListModal } from "../address_list_modal/AddressListModal";
import { Toast } from "../toast/Toast";
import { useAuthContext } from "../../context/AuthContext";
import { editUser } from "../../api/apicall";
import { formatDate } from "../../backend/utils/authUtils";

const BillCard = () => {
  const { productState, productDispatch } = useProductContext();
  const [bill, setBill] = useState({});
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [openAdrressList, setOpenAddressList] = useState(false);
  const [toast, setToast] = useState({ label: "", val: false });
  const { authState, authDispatch } = useAuthContext();
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

  const addToOrders = async () => {
    console.log(productState.cart);
    const orderSummary = {
      items: productState.cart,
      bill: bill,
      deliveredTo: selectedAddress,
      orderDate: formatDate(),
      _id: uuid(),
    };

    const updatedUser = {
      ...authState.user,
      orders: [...authState.user.orders, orderSummary],
    };
    const response = await editUser({ user: updatedUser });
    console.log(response);
    if (response.success) {
      authDispatch({
        type: "SET_LOGGED_USER",
        payload: {
          user: response.user,
          token: response.token,
        },
      });
      productDispatch({ type: "SET_CART", payload: [] });
    } else {
      alert("Something went wrong. Check console");
    }
  };

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
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
          alert("Payment success");
          setToast((prev) => ({
            ...prev,
            label: "Payment Successfull",
            val: true,
          }));
          setTimeout(() => {
            setToast((prev) => ({ ...prev, label: "", val: false }));
          }, 3000);

          addToOrders();
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
      {toast.val && <Toast label={toast.label} />}
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
            selectedAddress={selectedAddress}
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
              className={`btn btn-primary full-width ${
                selectedAddress === null ? "btn-disable" : ""
              }`}
              onClick={displayRazorpay}
              disabled={true}
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
