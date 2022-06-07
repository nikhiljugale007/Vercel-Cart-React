import { useAuthContext } from "../../context/AuthContext";
import { OrderCard } from "../order_card/OrderCard";
import "./Orders.css";

const Orders = () => {
  const { authState } = useAuthContext();
  const { orders } = authState.user;
  console.log("ORD = ", orders);
  const getFormatedDate = (date) => {
    return new Date(date).toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="flex-vt g-1">
      <p className="typo-label"> Your Orders ({orders.length})</p>

      {orders.map((order) => (
        <div className="order-card">
          <div>
            <p className="typo-label text-success">Order Confirmed</p>
            <p className="typo-subtext text-italic">
              Order Date: {getFormatedDate(order.orderDate)}
            </p>
          </div>
          <p className="typo-subtext">{"Order id: " + order._id}</p>
          <p className="typo-subtext">
            {"Delivered to: " +
              order.deliveredTo.name +
              ", " +
              order.deliveredTo.addressLine1 +
              ", " +
              order.deliveredTo.city +
              ", " +
              order.deliveredTo.state +
              ", " +
              order.deliveredTo.country +
              ", " +
              order.deliveredTo.pincode +
              ", " +
              order.deliveredTo.mobileno}
          </p>
          <p className="typo-subtext">{"Total = ₹" + order.bill.totalPrice}</p>
          <p>
            {order.items.map((item, index) => (
              <div key={index}>
                <OrderCard product={item} />
              </div>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};
export { Orders };
