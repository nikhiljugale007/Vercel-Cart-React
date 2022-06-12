import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
const RequireAuth = ({ children, from }) => {
  const { authState } = useAuthContext();
  if (localStorage.getItem("token")) {
    if (!authState.isLoggedIn) {
      localStorage.removeItem("token");
    }
  }
  return authState.isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: from }} />
  );
};
export { RequireAuth };
