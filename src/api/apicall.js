import axios from "axios";
const headers = { authorization: localStorage.getItem("token") };

const signupuser = async (user) => {
  try {
    const response = await axios.post("/api/auth/signup", { user });
    return { token: response.data.encodedToken, success: true };
  } catch (err) {
    return { token: "", success: false };
  }
};
const loginuser = async (user) => {
  try {
    const response = await axios.post("/api/auth/login", {
      email: user.email,
      password: user.password,
    });
    return {
      user: response.data.foundUser,
      token: response.data.encodedToken,
      success: true,
    };
  } catch (err) {
    console.log(err);
    return { token: "", success: false };
  }
};
const getUserById = async ({ userId }) => {
  try {
    const response = await axios.get(`/api/users/${userId}`);
    return { user: response.data.user, success: true };
  } catch (err) {
    console.log(err);
    return { user: {}, success: false };
  }
};
const editUser = async (user) => {
  try {
    const response = await axios.post(
      "/api/users/edit",
      { userData: user },
      { headers }
    );
    return { user: response.data.user, success: true };
  } catch (err) {
    console.log(err);
    return { user: [], success: false };
  }
};
const getAllProducts = async () => {
  try {
    const response = await axios.get("/api/products");
    return { products: response.data.products, success: true };
  } catch (err) {
    return { products: [], success: false };
  }
};

const getWishlist = async () => {
  try {
    const response = await axios.get("/api/user/wishlist", { headers });
    return { wishlist: response.data.wishlist, success: true };
  } catch (err) {
    return { wishlist: [], success: false };
  }
};

const addToWishlist = async (product) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      { headers }
    );
    return { wishlist: response.data.wishlist, success: true };
  } catch (err) {
    return { wishlist: [], success: false };
  }
};

const removeFromWishlist = async (itemId) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${itemId}`, {
      headers,
    });
    return { wishlist: response.data.wishlist, success: true };
  } catch (err) {
    return { wishlist: [], success: false };
  }
};
const getCart = async () => {
  try {
    const response = await axios.get("/api/user/cart", { headers });
    return { cart: response.data.cart, success: true };
  } catch (err) {
    return { cart: [], success: false };
  }
};
const addToCart = async (product) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      { product },
      { headers }
    );
    return { cart: response.data.cart, success: true };
  } catch (err) {
    return { getCart: [], success: false };
  }
};
const removeFromCart = async (itemId) => {
  try {
    const response = await axios.delete(`/api/user/cart/${itemId}`, {
      headers,
    });
    return { cart: response.data.cart, success: true };
  } catch (err) {
    return { cart: [], success: false };
  }
};
const changeQuantity = async (itemId, type) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${itemId}`,
      { action: { type: type } },
      {
        headers,
      }
    );
    return { cart: response.data.cart, success: true };
  } catch (err) {
    return { cart: [], success: false };
  }
};
const getCategories = async () => {
  try {
    const response = await axios("/api/categories");
    return { categories: response.data.categories, success: true };
  } catch (err) {
    return { categories: [], success: false };
  }
};
export {
  getAllProducts,
  getWishlist,
  addToWishlist,
  removeFromWishlist,
  getCart,
  addToCart,
  removeFromCart,
  changeQuantity,
  getCategories,
  signupuser,
  loginuser,
  getUserById,
  editUser,
};
