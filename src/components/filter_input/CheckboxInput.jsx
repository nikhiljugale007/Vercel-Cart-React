import "./FilterInput.css";
const CheckboxInput = ({ label, onChangeHandler }) => {
	return (
		<label htmlFor={label}>
			<input
				type="checkbox"
				id={label}
				onChange={onChangeHandler}
				value={label}
			/>
			<span className="typo-subtext label-text">{label}</span>
		</label>
	);
};
export { CheckboxInput };
