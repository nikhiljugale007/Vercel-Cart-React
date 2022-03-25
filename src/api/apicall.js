import axios from "axios";
const auth =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4MTAyMWNjNC00YjFkLTQyOGItYjJmMC0wNjhkYTQ4YTk4MzQiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.45ynQ6aZhoM1zsNwIKCYR_IATaszKn0ssvnPPQkKL8E";
const getAllProducts = async () => {
	try {
		const response = await axios.get("/api/products");
		return { products: response.data.products, success: true };
	} catch (err) {
		console.log(err);
		return { products: [], success: false };
	}
};

const getWishlist = async () => {
	const headers = { authorization: auth };
	try {
		const response = await axios.get("/api/user/wishlist", { headers });
		console.log(response);
		return { wishlist: response.data.wishlist, success: true };
	} catch (err) {
		console.log(err);
		return { wishlist: [], success: false };
	}
};

const addToWishlist = async (wishlisted_item) => {
	const headers = { authorization: auth };
	const product = wishlisted_item;
	try {
		const response = await axios.post(
			"/api/user/wishlist",
			{ product },
			{ headers }
		);
		return { wishlist: response.data.wishlist, success: true };
	} catch (err) {
		console.log(err);
		return { wishlist: [], success: false };
	}
};
const removeFromWishlist = async (item_id) => {
	const headers = { authorization: auth };
	try {
		const response = await axios.delete(`/api/user/wishlist/${item_id}`, {
			headers,
		});
		return { wishlist: response.data.wishlist, success: true };
	} catch (err) {
		console.log(err);
		return { wishlist: [], success: false };
	}
};
const getCart = async () => {
	const headers = { authorization: auth };
	try {
		const response = await axios.get("/api/user/cart", { headers });
		return { cart: response.data.cart, success: true };
	} catch (err) {
		console.log(err);
		return { cart: [], success: false };
	}
};
const addToCart = async (carted_item) => {
	const headers = { authorization: auth };
	const product = carted_item;
	try {
		const response = await axios.post(
			"/api/user/cart",
			{ product },
			{ headers }
		);
		return { cart: response.data.cart, success: true };
	} catch (err) {
		console.log(err);
		return { getCart: [], success: false };
	}
};
export {
	getAllProducts,
	getWishlist,
	addToWishlist,
	removeFromWishlist,
	getCart,
	addToCart,
};
