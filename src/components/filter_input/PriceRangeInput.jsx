const PriceRangeInput = ({ value, onChangeHandler }) => {
	return (
		<div className="slider-container">
			<label className="typo-subtext" htmlFor="volume">
				0
			</label>
			<input
				type="range"
				id="volume"
				name="volume"
				min="0"
				max="1000"
				value={value}
				onChange={onChangeHandler}
			/>
			<label className="typo-subtext" htmlFor="volume">
				1000
			</label>
		</div>
	);
};

export { PriceRangeInput };
