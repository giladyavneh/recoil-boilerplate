import React from "react";
import { useRecoilValue } from "recoil";
import { rectFamily } from "../../App/atomFamily";
import "./rectangle.css";

function Rectangle({id}) {
	const rect=useRecoilValue(rectFamily(id))
	console.log(rect)
	const style={
		height:rect.height+"px",
		width:rect.width+"px",
		backgroundColor:rect.color
	}
	return <div className="rect" style={style}>{rect.name}</div>;
}

export default Rectangle;
