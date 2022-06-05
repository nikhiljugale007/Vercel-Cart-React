import { Toast } from "../../../components";
import "./Profile.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useProductContext } from "../../../context/ProductContext";
import { useAuthContext } from "../../../context/AuthContext";
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
        <p>{authState.user.email}</p>
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
