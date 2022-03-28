import "../authentication.css";
import { CheckboxInput, FormInput } from "../../../components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { loginuser } from "../../../api/apicall";
import { useNavigate } from "react-router";

const inititalLoginState = { email: "", password: "" };

const validateForm = (formState) => {
	const { email, password } = formState;
	const errors = {};

	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
	if (!email) {
		errors.email = "Email is required!";
	} else if (!regex.test(email)) {
		errors.email = "This is not a valid email format!";
	}
	if (!password) {
		errors.password = "Password is required";
	}
	return errors;
};

const Login = () => {
	const [loginFormState, setLoginFormState] = useState(inititalLoginState);
	const [formError, setFormError] = useState(inititalLoginState);
	let navigate = useNavigate();

	const loginUserFun = async () => {
		const response = await loginuser(loginFormState);
		if (response.success) {
			localStorage.setItem("token", response.token);
			console.log(localStorage.getItem("token"));
			navigate("/");
		} else {
			console.log("SOME ERROR1");
		}
	};
	const loginUser = (e) => {
		e.preventDefault();
		const errors = validateForm(loginFormState);
		if (Object.keys(errors).length === 0) {
			console.log(loginFormState);
			setFormError(inititalLoginState);
			loginUserFun();
		} else {
			setFormError(errors);
			console.log("ERR = ", formError);
		}
	};

	const inputChangeHandler = (e) => {
		const new_val = { [e.target.name]: e.target.value };
		setLoginFormState((prev) => ({ ...prev, ...new_val }));
	};

	useEffect(() => {
		if (localStorage.getItem("token")) {
			navigate("/profile");
		}
	}, [navigate]);
	return (
		<>
			<div className="form-container authentication-page">
				<form className="form card" onSubmit={loginUser}>
					<p className="typo-title flex-hz-center">Sign in</p>
					<FormInput
						label={"email"}
						value={loginFormState.email}
						onChangeFunction={inputChangeHandler}
					/>
					<label className="text-highlight">{formError.email}</label>

					<FormInput
						label={"password"}
						value={loginFormState.password}
						onChangeFunction={inputChangeHandler}
					/>
					<label className="text-highlight">{formError.password}</label>

					<label className="flex-hz-space-bw">
						<CheckboxInput label="Remember Me" />

						<Link to="/login" className="btn btn-link">
							Forgot password
						</Link>
					</label>
					<button type="submit" className="btn btn-primary">
						Login
					</button>
					<Link to="/signup" className="link-no-style">
						<button className="btn btn-link full-width">
							Create New Account{" "}
						</button>
					</Link>
				</form>
			</div>
		</>
	);
};
export { Login };