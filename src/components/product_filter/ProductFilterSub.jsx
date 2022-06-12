import "./ProductFilter.css";
import { RadioInput } from "../filter_input/RadioInput";
import { CheckboxInput } from "../filter_input/CheckboxInput";
import { PriceRangeInput } from "../filter_input/PriceRangeInput";
import { useProductContext } from "../../context/ProductContext";
import { getCategories } from "../../api/apicall";
import { useEffect, useState } from "react";
const ProductFilterSub = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategoryData = async () => {
      const response = await getCategories();
      response.success ? setCategories(response.categories) : setCategories([]);
    };
    getCategoryData();
  }, []);
  const ratingOptions = [5, 4, 3, 2, 1];

  const { productState, productDispatch } = useProductContext();

  const priceRangeChangeHandler = (e) => {
    productDispatch({ type: "PRICE_RANGE_FILTER", payload: e.target.value });
  };

  const sortByPriceChangeHandler = (e) => {
    productDispatch({ type: "SORT_BY_PRICE", payload: e.target.value });
  };

  const ratingChangeHandler = (e) => {
    productDispatch({ type: "RATING_FILTER", payload: e.target.value });
  };

  const categoryChangeHandler = (e) => {
    const changedCategory = e.target.value;
    let updatedCategry = productState.dataFilter.categories;
    let find = updatedCategry.indexOf(changedCategory);
    if (find > -1) {
      updatedCategry = updatedCategry.filter(
        (item) => item !== changedCategory
      );
    } else {
      updatedCategry.push(changedCategory);
    }
    productDispatch({ type: "CATEGORY_FILTER", payload: updatedCategry });
  };
  const checkCategoryIsChecked = ({ category }) => {
    return productState.dataFilter.categories.includes(category);
  };
  return (
    <div>
      {/* price range filter */}
      <div className="list">
        <label className="typo-subtext flex-hz-space-bw " htmlFor="volume">
          <p className="text-bold ">Price</p>
          <p>Under {productState.dataFilter.maxPrice}</p>
        </label>
        <PriceRangeInput
          value={productState.dataFilter.maxPrice}
          onChangeHandler={priceRangeChangeHandler}
        />
      </div>
      <hr />

      {/* category filter */}
      <ul className="list list-style-nostyle">
        <label className="typo-subtext text-bold">Category</label>
        {categories.map((option, index) => (
          <CheckboxInput
            label={option.categoryName}
            key={index}
            isChecked={checkCategoryIsChecked({
              category: option.categoryName,
            })}
            onChangeHandler={categoryChangeHandler}
          />
        ))}
      </ul>
      <hr />

      {/* rating filter */}
      <ul className="list list-style-nostyle">
        <label className="typo-subtext text-bold">Rating</label>
        {ratingOptions.map((option, index) => (
          <RadioInput
            label={option + " star & above"}
            key={index}
            value={option}
            isChecked={productState.dataFilter.rating === option}
            onChangeHandler={ratingChangeHandler}
          />
        ))}
      </ul>
      <hr />

      {/* price sort filter */}
      <ul className="list list-style-nostyle">
        <label className="typo-subtext text-bold">Sort By</label>
        <RadioInput
          label="Price- Low to High"
          name="sortbyprice"
          onChangeHandler={sortByPriceChangeHandler}
          value="HIGH_TO_LOW"
          isChecked={productState.dataFilter.sortByPrice === "HIGH_TO_LOW"}
        />
        <RadioInput
          label="Price- High to Low"
          name="sortbyprice"
          onChangeHandler={sortByPriceChangeHandler}
          value="LOW_TO_HIGH"
          isChecked={productState.dataFilter.sortByPrice === "LOW_TO_HIGH"}
        />
      </ul>
    </div>
  );
};

export { ProductFilterSub };
