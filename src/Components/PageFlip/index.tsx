import React, { memo } from "react";
import { FullScreenLoader } from "Components/ScreenLoader";
import { useFlipper } from "State/Flipper";
import { useScreen } from "State/Screen";
import type { OptionalChildren } from "Tools/Types";
import "./styles.scss";

export const PageFlip = memo(function PageFlip({ children }: OptionalChildren) {
  const height = useScreen(state => state.height);
  const classes = useFlipper(state => state.classes);

  return (
    <div className={`flip-container ${classes}`} style={{ height }}>
      <div className="flip-page" style={{ height }}>
        <div className="front">{children}</div>
        <div className="back">
          <FullScreenLoader />
        </div>
      </div>
    </div>
  );
});
