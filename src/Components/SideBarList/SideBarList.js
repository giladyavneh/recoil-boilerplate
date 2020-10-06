import React from "react";
import "./sideList.css";
// DO NOT TOUCH THAT
import { useRenderMeter } from "../../ChallengeUtils/hooks.js";
import { sideBarListRenderMeterState } from "../../ChallengeUtils/renderMeter";
import { useRecoilValue } from "recoil";
import { rectanglesIdArrayState } from "../../atoms";
import SideBarItem from "../SideBarItem/SideBarItem";
// ---------------------

function SideBarList() {
	//DO NOT TOUCH THAT
	useRenderMeter(sideBarListRenderMeterState);
	// ----------------
	const rectanglesArray=useRecoilValue(rectanglesIdArrayState)
	return <ul className="sidebar__list">
		{rectanglesArray.map((id)=><SideBarItem key={id} id={id}/>)}
	</ul>;
}

export default SideBarList;
