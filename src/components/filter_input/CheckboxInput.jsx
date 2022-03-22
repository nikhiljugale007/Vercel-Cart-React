import "./FilterInput.css";
const CheckboxInput = ({ label }) => {
	return (
		<label htmlFor="checkboxinput">
			<input type="checkbox" id="checkboxinput" />
			<span className="typo-subtext label-text">{label}</span>
		</label>
	);
};
export { CheckboxInput };
