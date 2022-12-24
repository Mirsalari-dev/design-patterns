import PropTypes from "prop-types";
import { useState } from "react";

function Input({ name, render, children }) {
	const [value, setValue] = useState("");
	const inputChangeHandler = (e) => {
		setValue(e.target.value);
	};
	return (
		<>
			<label>{name}</label>
			<input
				type="text"
				placeholder={`please enter ${name}`}
				value={value}
				onChange={inputChangeHandler}
			/>
			{/* {render && render({ value })} */}
			{children && children({ value })}
		</>
	);
}

Input.propTypes = {
	name: PropTypes.string.isRequired,
	render: PropTypes.func,
};

export default Input;
