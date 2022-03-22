import "./ProductFilter.css";
import { RadioInput } from "../filter_input/RadioInput";
import { CheckboxInput } from "../filter_input/CheckboxInput";
import { PriceRangeInput } from "../filter_input/PriceRangeInput";
const ProductFilterSub = () => {
	const categoryOptions = [
		"Formal Shoes",
		"Casual Shoes",
		"Festival Shoes",
		"Running Shoes",
	];
	const ratingOptions = [5, 4, 3, 2, 1];
	return (
		<div>
			{/* price range filter */}
			<div className="list">
				<label className="typo-subtext text-bold" htmlFor="volume">
					Price
				</label>
				<PriceRangeInput />
			</div>
			<hr />

			{/* category filter */}
			<ul className="list list-style-nostyle">
				<label className="typo-subtext text-bold">Category</label>
				{categoryOptions.map((option, index) => (
					<RadioInput label={option} />
				))}
			</ul>
			<hr />

			{/* rating filter */}
			<ul className="list list-style-nostyle">
				<label className="typo-subtext text-bold">Rating</label>
				{ratingOptions.map((option, index) => (
					<CheckboxInput label={option + " star & above"} />
				))}
			</ul>
			<hr />

			{/* price sort filter */}
			<ul className="list list-style-nostyle">
				<label className="typo-subtext text-bold">Sort By</label>
				<RadioInput label="Price- Low to High" />
				<RadioInput label="Price- High to Low" />
			</ul>
		</div>
	);
};

export { ProductFilterSub };
