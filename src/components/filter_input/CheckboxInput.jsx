import "./FilterInput.css";
const CheckboxInput = ({ label, name, onChangeHandler, isChecked }) => {
  return (
    <label htmlFor={label}>
      <input
        type="checkbox"
        name={name}
        id={label}
        onChange={onChangeHandler}
        value={label}
        checked={isChecked}
      />
      <span className="typo-subtext label-text">{label}</span>
    </label>
  );
};
export { CheckboxInput };
