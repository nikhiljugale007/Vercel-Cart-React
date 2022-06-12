import "./Cart.css";
import { CartProductCard, BillCard } from "../../components";
import { useEffect } from "react";
import { getCart } from "../../api/apicall";
import { useProductContext } from "../../context/ProductContext";
import { useNavigate } from "react-router";

const Cart = () => {
  const { productState, productDispatch } = useProductContext();
  const navigate = useNavigate();

  useEffect(() => {
    const getCartData = async () => {
      const response = await getCart();
      const cartArray = response.cart.filter((cartItem) => cartItem.qty > 0);
      response.success
        ? productDispatch({ type: "SET_CART", payload: cartArray })
        : productDispatch({ type: "SET_CART", payload: [] });
    };
    getCartData();
  }, [productDispatch, navigate]);
  return (
    <div className="cart-page">
      <p className="typo-title flex-hz-center p-2">
        My Cart {`( ${productState.cart.length} items)`}
      </p>
      <div className="grid grid-2x2">
        <div className="item-section">
          {productState.cart.map((product, index) => (
            <CartProductCard product={product} key={index} />
          ))}
        </div>
        <div className="bill-section">
          <BillCard />
        </div>
      </div>
    </div>
  );
};

export { Cart };
