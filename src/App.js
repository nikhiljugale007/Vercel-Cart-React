import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Home } from "./pages";
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/mockman" element={<Mockman />} />
			</Routes>
		</>
	);
}

export default App;
