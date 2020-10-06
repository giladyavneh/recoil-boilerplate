import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { rectanglesIdArrayState } from "../../atoms";
import {rectFamily} from "../../App/atomFamily"
import "./menu.css";

function Menu() {
	// Input states
	const [widthInput, setWidthInput] = useState(75);
	const [heightInput, setHeightInput] = useState(75);
	const [colorInput, setColorInput] = useState("#769fcd");
	const [count, setCount]= useState(1)
	const [rectArray, setRectArray]=useRecoilState(rectanglesIdArrayState)
	const [rect, setRect]=useRecoilState(rectFamily(count))
	
	const submitShape = () => {
		setRectArray(oldArr=>oldArr.concat([count]))
		setRect({width:widthInput, height:heightInput, color:colorInput})
		setCount(c=>c+1)

	};
	
	return (
		<div className="sidebar__menu">
			<label htmlFor="widthInput">Width:</label>
			<input
				id="widthInput"
				type="number"
				placeholder="50"
				value={widthInput}
				onChange={({ target }) => setWidthInput(target.value)}
				min="0"
			/>
			<label htmlFor="heightInput">Height:</label>
			<input
				id="heightInput"
				type="number"
				placeholder="50"
				value={heightInput}
				onChange={({ target }) => setHeightInput(target.value)}
				min="0"
			/>
			<label htmlFor="colorPicker">Color:</label>
			<input
				type="color"
				id="colorPicker"
				value={colorInput}
				onChange={({ target }) => setColorInput(target.value)}
			/>
			<button onClick={submitShape} id="add-shape">
				Add Shape
			</button>
			<div id="idCounter">{rectArray.length}</div>
		</div>
	);
}
export default Menu;
