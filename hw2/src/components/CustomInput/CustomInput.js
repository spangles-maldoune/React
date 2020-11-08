import React from "react";
import "./CustomInput.css";

const CustomInput = (props) => {
	const {forName, labelValue, inputType, idName, valueCollector} = props;

	return(
		<React.Fragment>
			<label htmlFor={forName}>{labelValue}:</label>
			<input type={inputType} id={idName} onInput={({target}) => valueCollector(target.id, target.value)}/>
		</React.Fragment>
	)
}

export default CustomInput;