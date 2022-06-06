import { Address, Orders, Toast, UserProfile } from "../../../components";
import "./Profile.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useProductContext } from "../../../context/ProductContext";
import { useAuthContext } from "../../../context/AuthContext";
import { Routes, Route, Link } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { productDispatch } = useProductContext();
  const { authState } = useAuthContext();
  const [toast, setToast] = useState({ label: "", val: false });
  const signoutUser = () => {
    setToast(() => ({ label: "Signing out user", val: true }));
    localStorage.removeItem("token");
    productDispatch({ type: "RESET_PRODUCT_STATE" });

    setTimeout(() => {
      setToast(() => ({ label: "", val: false }));
      navigate("/login");
    }, 2000);
  };

  return (
    <>
      {toast.val && <Toast label={toast.label} />}
      <div className="profile-page">
        <p className="typo-title flex-hz-center p-2">My Profile</p>
        <div className="profile-grid">
          <div className="flex-vt gap-1">
            <Link to="/profile" className="link-no-style">
              <button className="btn btn-text">
                <p className="typo-label">Profile</p>
              </button>
            </Link>
            <hr />
            <Link to="/profile/address" className="link-no-style">
              <button className="btn btn-text">
                <p className="typo-label">Address</p>
              </button>
            </Link>
            <hr />
            <Link to="/profile/orders" className="link-no-style">
              <button className="btn btn-text">
                <p className="typo-label">Orders</p>
              </button>
            </Link>
          </div>
          <div className="grid-profile">
            <Routes>
              <Route path="/" element={<UserProfile />} />
              <Route path="/address" element={<Address />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </div>
        {/* <div className="flex-hz gap-1">
          <Link to="/profile" className="link-no-style">
            <button className="btn btn-outlined">
              <p className="typo-label">User Profile</p>
            </button>
          </Link>
          <Link to="/profile/address" className="link-no-style">
            <button className="btn btn-outlined">
              <p className="typo-label">Address</p>
            </button>
          </Link>
          <Link to="/profile/orders" className="link-no-style">
            <button className="btn btn-outlined">
              <p className="typo-label">Orders</p>
            </button>
          </Link>
        </div> */}
        {/* <Routes>
          <Route path="/" element={<UserProfile />} />
          <Route path="/address" element={<Address />} />
          <Route path="/orders" element={<Orders />} />
        </Routes> */}
        <div className="flex-hz-center">
          <button className="btn btn-outlined" onClick={signoutUser}>
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export { Profile };
