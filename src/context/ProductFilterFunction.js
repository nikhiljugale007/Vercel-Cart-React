const sortByPrice = (products, sortBy) => {
	if (sortBy === "HIGH_TO_LOW") {
		return products.sort(
			(firstProduct, secondProduct) => firstProduct.price - secondProduct.price
		);
	} else if (sortBy === "LOW_TO_HIGH") {
		return products.sort(
			(firstProduct, secondProduct) => secondProduct.price - firstProduct.price
		);
	} else {
		return products;
	}
};

const filterByCategory = (products, categoryFilter) => {
	return categoryFilter.length === 0
		? products
		: products.filter(
				(product) => categoryFilter.indexOf(product.categoryName) > -1
		  );
};

const filterByRating = (products, minRating) => {
	return products.filter((product) => product.rating >= minRating);
};

const filterByMaxPrice = (products, maxPrice) => {
	return maxPrice === null
		? products
		: products.filter((product) => product.price <= maxPrice);
};

const filterByStock = (products, includeOutOfStock) => {
	return includeOutOfStock
		? products
		: products.filter((product) => product.inStock);
};
// const filterByDelivery = (products, fastDelivery) => {
// 	return fastDelivery
// 		? products.filter((product) => product.fastDelivery)
// 		: products;
// };

const getFilteredData = (products, dataFilter) => {
	const ratingSortedData = filterByRating(products, dataFilter.rating);
	const stockSortedData = filterByStock(
		ratingSortedData,
		dataFilter.includeOutOfStock
	);
	const categorySortedData = filterByCategory(
		stockSortedData,
		dataFilter.categories
	);
	const priceRangeSortedData = filterByMaxPrice(
		categorySortedData,
		dataFilter.maxPrice
	);
	const filteredData = sortByPrice(
		priceRangeSortedData,
		dataFilter.sortByPrice
	);
	return filteredData;
};
export { getFilteredData };
