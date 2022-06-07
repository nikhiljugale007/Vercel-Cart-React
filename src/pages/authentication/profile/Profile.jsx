import { Address, Orders, UserProfile } from "../../../components";
import "./Profile.css";
import { useEffect } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { getUserById } from "../../../api/apicall";

const Profile = () => {
  const { authState, authDispatch } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    const getUseInfo = async () => {
      const response = await getUserById({ userId: authState.user._id });
      if (response.success) {
        authDispatch({
          type: "SET_LOGGED_USER",
          payload: {
            user: response.user,
            token: response.token,
          },
        });
      } else {
        alert("Something went wrong, check console");
      }
    };

    getUseInfo();
  }, [authState.user._id, authDispatch, navigate]);
  return (
    <>
      <div className="profile-page">
        <p className="typo-title flex-hz-center p-2">Account</p>
        <hr className="title-divider" />
        <div className="profile-grid">
          <div className="profile-nav">
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
      </div>
    </>
  );
};

export { Profile };
