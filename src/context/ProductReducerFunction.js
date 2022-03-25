const productReducerFunction = (state, action) => {
	switch (action.type) {
		case "PRICE_RANGE_FILTER":
			return {
				...state,
				dataFilter: { ...state.dataFilter, maxPrice: Number(action.payload) },
			};
		case "SORT_BY_PRICE":
			return {
				...state,
				dataFilter: { ...state.dataFilter, sortByPrice: action.payload },
			};

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
		case "SET_PRODUCTS":
			return {
				...state,
				products: action.payload,
			};
		case "SET_WISHLIST":
			return {
				...state,
				wishlist: action.payload,
			};

		case "SET_CART":
			return {
				...state,
				cart: action.payload,
			};
		default:
			return state;
	}
};
export { productReducerFunction };
