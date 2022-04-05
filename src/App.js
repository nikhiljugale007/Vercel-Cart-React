import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import {
	Home,
	Product,
	Cart,
	Wishlist,
	Login,
	SignUp,
	Profile,
	SingleProductPage,
} from "./pages";
import { Header } from "./components";
function App() {
	return (
		<>
			{/* <Header /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Product />} />
				<Route path="/products/:id" element={<SingleProductPage />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/mockman" element={<Mockman />} />
				<Route path="/wishlist" element={<Wishlist />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</>
	);
}

export default App;
