import React from "react";
import "./canvas.css";
// DO NOT TOUCH THAT
import { canvasRenderMeterState } from "../../ChallengeUtils/renderMeter.js";
import { useRenderMeter } from "../../ChallengeUtils/hooks.js";
import { useRecoilValue } from "recoil";
import { canvasBackgroundColorState, rectanglesIdArrayState } from "../../atoms";
import Rectangle from "../Rectangle/Rectangle";

function Canvas() {
  // TOUCH THAT IF YOU WANT TO GET KILLED
  useRenderMeter(canvasRenderMeterState);
  // ---------------------------------------------
  const bgcolor = useRecoilValue(canvasBackgroundColorState);
  const rectanglesArray = useRecoilValue(rectanglesIdArrayState);
  console.log(rectanglesArray)
  return (
    <div className="canvas" id="canvas" style={{ backgroundColor: bgcolor }}>
      {rectanglesArray.map((id) => (
        <Rectangle
          key={id}
          id={id}
        />
      ))}
    </div>
  );
}

export default Canvas;
