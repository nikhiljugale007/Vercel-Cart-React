import { useAuthContext } from "../../context/AuthContext";

const Orders = () => {
  const { authState } = useAuthContext();
  const { orders } = authState.user;
  return (
    <div className="flex-vt g-1">
      <p className="typo-label"> Your Orders {orders.length}</p>
    </div>
  );
};
export { Orders };
