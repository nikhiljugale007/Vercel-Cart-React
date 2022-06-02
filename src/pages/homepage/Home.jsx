import "./Home.css";

import { AdvCard, DiscountCard } from "../../components";
import { todays_deals, top_brands, top_categories } from "./HomePageData";
import { hero1 } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";
const Home = () => {
  const navigate = useNavigate();
  const navigateToProductPage = () => {
    navigate("/product");
  };
  const { productState, productDispatch } = useProductContext();

  const categoryChangeHandler = ({ changedCategory }) => {
    //     const changedCategory = e.target.value;
    let updatedCategry = productState.dataFilter.categories;
    updatedCategry.push(changedCategory);
    productDispatch({ type: "CATEGORY_FILTER", payload: updatedCategry });
    navigate("/product");
  };
  return (
    <main>
      <div className="hero-section">
        <div className="grid grid-2x2">
          <div className="text-section">
            <div className="typo-label">UP TO 20% DISCOUNT ON</div>
            <div className="h1 text-bold">Footware Fashion</div>
            <p className="typo-subtext">
              Top deals on shoes, sandals, flip-flops. Find your best brands at
              affordable price. No cost EMI. Complete Protection. Exchange
              offer.
            </p>
            <Link to="/product" className="link-no-style">
              <button className="btn btn-primary">Explore now</button>
            </Link>
          </div>
          <div className="img-section">
            <img className="img-responsive" alt="hero" src={hero1} />
          </div>
        </div>
      </div>
      <div className="top-category flex-vt-center">
        <div className="flex-vt-center category-heading typo-label">
          <p className="h1">Todays top deals</p>
        </div>
        <div className="grid grid-auto">
          {todays_deals.map((item, index) => (
            <div onClick={navigateToProductPage} key={index}>
              <DiscountCard
                card_title={item.item_name}
                card_subtitle={item.offer}
                image_src={item.image_src}
                image_alt={item.image_alt}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="top-category flex-vt-center">
        <div className="flex-vt-center category-heading typo-label">
          <p className="h1">Top categories</p>
          <p>Check out which categories are trending right out and then shop</p>
        </div>
        <div className="grid grid-4-responsive">
          {top_categories.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                categoryChangeHandler({ changedCategory: item.category_name })
              }
            >
              <AdvCard
                card_title={item.category_name}
                image_src={item.image_src}
                image_alt={item.image_alt}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="featured-brand flex-vt-center">
        <div className="flex-vt-center category-heading typo-label">
          <p className="h1">Featured brands</p>
          <p>Find top brands at most affordable price</p>
        </div>

        <div className="grid grid-4-responsive">
          {top_brands.map((item, index) => (
            <AdvCard
              key={index}
              card_title={item.brand_name}
              image_src={item.image_src}
              image_alt={item.image_alt}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export { Home };
