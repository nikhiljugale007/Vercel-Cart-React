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
  NotFoundPage,
} from "./pages";
import { Header } from "./components";
import { RequireAuth } from "./components/auth_wrapper/RequireAuth";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="/cart"
          element={
            <RequireAuth from="/cart">
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequireAuth from="/wishlist">
              <Wishlist />
            </RequireAuth>
          }
        />
        <Route
          path="/profile/*"
          element={
            <RequireAuth from="/profile/*">
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="/mockman" element={<Mockman />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/wishlist" element={<Wishlist />} /> */}
        {/* <Route path="/profile/*" element={<Profile />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
