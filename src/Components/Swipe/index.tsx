import React, { memo, useContext } from "react";
import { RightChevron } from "Components/RightChevron";
import { SlideContext } from "Contexts/SlideContext";
import type { Propless } from "Tools/Types";
import "./styles.scss";

export const Swipe = memo(
  function Swipe(_: Propless) {
    const visible = useContext(SlideContext);
    return (
      <div className={`swipe-right ${visible ? "active" : ""}`}>
        <div className="icon">
          <RightChevron />
        </div>
        <div className="icon">
          <RightChevron />
        </div>
        <div className="icon">
          <RightChevron />
        </div>
      </div>
    );
  },
  () => true,
);
