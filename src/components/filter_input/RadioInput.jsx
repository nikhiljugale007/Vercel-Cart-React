import "./FilterInput.css";
const RadioInput = ({ label }) => {
	return (
		<label htmlFor="radioinput">
			<input type="radio" id="radioinput" />
			<span className="typo-subtext label-text">{label}</span>
		</label>
	);
};
export { RadioInput };
