import React from "react";
import { useRecoilState } from "recoil";
import { canvasBackgroundColorState } from "../../atoms";
import "./colorPicker.css";

function ColorPicker() {
	const [color,setColor]=useRecoilState(canvasBackgroundColorState)
	return (
		<div className="colorPicker">
			<label htmlFor="colorPickerInput">
				change canvas color to random color:
				<input id="colorPickerInput" type="color" onChange={({target})=>setColor(target.value)}/>
			</label>
		</div>
	);
}

export default ColorPicker;
