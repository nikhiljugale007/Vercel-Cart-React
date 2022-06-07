import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialValue = {
  user: {},
  token: "",
  isLoggedIn: false,
};

const authReducerFunction = (state, action) => {
  switch (action.type) {
    case "SET_LOGGED_USER":
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: true,
        token: action.payload.token,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: {},
        isLoggedIn: false,
        token: "",
      };
    default:
      return state;
  }
};
const AuthContextProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(
    authReducerFunction,
    initialValue
  );

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuthContext = () => useContext(AuthContext);

export { AuthContextProvider, useAuthContext };
