import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useProductContext } from "../../context/ProductContext";
import { useNavigate } from "react-router";
import { Toast } from "../toast/Toast";

const UserProfile = () => {
  const { authState, authDispatch } = useAuthContext();
  const { firstName, lastName, email } = authState.user;
  const [toast, setToast] = useState({ label: "", val: false });
  const { productDispatch } = useProductContext();
  const navigate = useNavigate();

  const signoutUser = () => {
    setToast(() => ({ label: "Signing out user", val: true }));
    localStorage.removeItem("token");
    productDispatch({ type: "RESET_PRODUCT_STATE" });
    authDispatch({
      type: "LOGOUT_USER",
    });
    setTimeout(() => {
      setToast(() => ({ label: "", val: false }));
      navigate("/login");
    }, 2000);
  };
  return (
    <div className="flex-vt g-1 full-width">
      <p className="typo-label ">Profile Details</p>
      {toast.val && <Toast label={toast.label} />}
      <p className="typo-label">{"Email = " + email}</p>
      <p className="typo-label full-width">
        {"Name = " + firstName + " " + lastName}
      </p>
      <div className="flex-hz-center">
        <button className="btn btn-outlined" onClick={signoutUser}>
          Sign Out
        </button>
      </div>
    </div>
  );
};
export { UserProfile };
