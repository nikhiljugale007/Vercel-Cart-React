// import {
// 	addItemToCart,
// 	addItemToWishlist,
// 	getWishlist,
// 	removeItemFromWishlsit,
// } from "../Api/apicalls";
const productReducerFunction = (state, action) => {
	switch (action.type) {
		case "PRICE_RANGE_FILTER":
			return {
				...state,
				dataFilter: { ...state.dataFilter, maxPrice: Number(action.payload) },
			};
		case "SORT_BY_PRICE":
			if (action.payload === "LOW_TO_HIGH") {
				return {
					...state,
					dataFilter: { ...state.dataFilter, sortByPrice: "LOW_TO_HIGH" },
				};
			} else if (action.payload === "HIGH_TO_LOW") {
				return {
					...state,
					dataFilter: { ...state.dataFilter, sortByPrice: "HIGH_TO_LOW" },
				};
			} else {
				return state;
			}
		case "RATING_FILTER":
			return {
				...state,
				dataFilter: {
					...state.dataFilter,
					rating: Number(action.payload),
				},
			};
		case "CATEGORY_FILTER":
			return {
				...state,
				dataFilter: {
					...state.dataFilter,
					categories: action.payload,
				},
			};
		case "RESET_FILTER":
			return {
				...state,
				dataFilter: {
					includeOutOfStock: true,
					sortByPrice: null,
					categories: [],
					rating: 0,
					minPrice: 0,
					maxPrice: null,
				},
			};

		default:
			return state;
	}
};
export { productReducerFunction };
