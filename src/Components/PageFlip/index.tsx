import React, { memo } from "react";
import { TimedPromise } from "@figliolia/promises";
import { FullScreenLoader } from "Components/ScreenLoader";
import { useMount } from "Hooks/useMount";
import { Flipper, useFlipper } from "State/Flipper";
import { useScreen } from "State/Screen";
import { Preloader } from "Tools/Preloader";
import type { OptionalChildren } from "Tools/Types";
import "./styles.scss";

export const PageFlip = memo(function PageFlip({ children }: OptionalChildren) {
  const height = useScreen(state => state.height);
  const classes = useFlipper(state => state.classes);

  useMount(() => {
    void Preloader.loadBackground().then(() => {
      Flipper.activate();
      const TP = new TimedPromise(() => Preloader.initialize(), 2500);
      void TP.run().then(({ remainingMS }) => {
        Flipper.show(remainingMS);
      });
    });
  });

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
