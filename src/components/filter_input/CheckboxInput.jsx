import "./FilterInput.css";
const CheckboxInput = ({ label }) => {
	return (
		<label>
			<input type="radio" />
			<span className="typo-subtext label-text">{label}</span>
		</label>
	);
};
export { CheckboxInput };
