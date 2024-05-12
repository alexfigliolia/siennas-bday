import React, { memo } from "react";
import { Loader } from "Components/Loader";
import { useScreen } from "State/Screen";
import type { Propless } from "Tools/Types";
import "./styles.scss";

export const FullScreenLoader = memo(
  function FullScreenLoader(_: Propless) {
    const height = useScreen(state => state.height);
    return (
      <div className="screen-loader" style={{ height }}>
        <Loader />
      </div>
    );
  },
  () => true,
);
