import "./FilterInput.css";
const RadioInput = ({ label, onChangeHandler, isChecked, value }) => {
	return (
		<label htmlFor={value}>
			<input
				type="radio"
				id={value}
				value={value}
				onChange={onChangeHandler}
				checked={isChecked}
			/>
			<span className="typo-subtext label-text">{label}</span>
		</label>
	);
};
export { RadioInput };
