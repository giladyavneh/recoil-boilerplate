import React from "react";
import { useRecoilState } from "recoil";
import { rectFamily } from "../../App/atomFamily";
import "./sideBarItem.css";

function SideBarItem({id}) {
	const [item, setItem]=useRecoilState(rectFamily(id))
	// const [rectanglesArray, setReactanglesArray]=useRecoilState(rectanglesArrayState)
	function updateRect(event,attribute){
		setItem(item=>({
			...item,[attribute]:event.target.value
		}))
	}
	return (
		<li className="sidebar__row">
			<span className="sidebarItemName">{id}</span>
			<label>width :</label>
			<input id="shapeWidthInput" type="number" value={item.width} onChange={(e)=>updateRect(e,'width')} placeholder="width" min="0" />
			<label>height :</label>
			<input id="shapeHeightInput" type="number" value={item.height} onChange={(e)=>updateRect(e,'height')} placeholder="height" min="0" />
			<label>color :</label>
			<input type="color" id="colorModifier" value={item.color} onChange={(e)=>updateRect(e,'color')}/>
		</li>
	);
}

export default SideBarItem;
