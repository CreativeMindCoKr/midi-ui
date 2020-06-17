import React, { memo } from "react";
import { FileImg } from "./FileImg";
import "./App.scss";

export const Container: React.FC = memo(function Container() {
  return (
    <div>
      <div className="buttonGroup">
        <div className="one">
          <div className="button">반주 midi 파일 생성</div>
          <div style={{ overflow: "hidden", clear: "both" }}>
            <FileImg name="반주" step={1} />
          </div>
        </div>

        <div className="one">
          <div className="button">보이싱 midi 파일 생성</div>
          <div style={{ overflow: "hidden", clear: "both" }}>
            <FileImg name="보이싱" step={2} />
          </div>
        </div>

        <div className="one">
          <div className="button">멜로디 midi 파일 생성</div>
          <div style={{ overflow: "hidden", clear: "both" }}>
            <FileImg name="멜로디" step={3} />
          </div>
        </div>
      </div>
    </div>
  );
});
