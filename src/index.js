import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductContextProvider } from "./context/ProductContext";
// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<ProductContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ProductContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
