import "./FilterInput.css";
const RadioInput = ({ label }) => {
	return (
		<label>
			<input type="radio" />
			<span className="typo-subtext label-text">{label}</span>
		</label>
	);
};
export { RadioInput };
