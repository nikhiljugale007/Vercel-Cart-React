import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Home, Cart } from "./pages";
import { Header } from "./components";
function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/mockman" element={<Mockman />} />
			</Routes>
		</>
	);
}

export default App;
