import "./OrderCard.css";

const OrderCard = ({ product }) => {
  const { title, brand, image_src, price, original_price, qty } = product;

  return (
    <>
      <div className="card horizontal-card">
        <img
          className="card-img-container horizontal-card-image "
          src={image_src}
          alt="shoes"
        />
        <div className="card-body">
          <h2 className="card-heading">{title}</h2>
          <h3 className="card-subheading">by {brand}</h3>
          <p className="price-container">
            <p className="typo-label">Rs. {price}</p>
            <p className="typo-subtext text-line-through">
              Rs {original_price}
            </p>
          </p>
          <div className="item-counter">
            <p className="typo-subtext temo1">Quantity: {qty} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { OrderCard };
