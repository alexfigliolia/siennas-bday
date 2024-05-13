import React, { memo, useEffect, useMemo } from "react";
import { use60FPS } from "Hooks/use60FPS";
import { Flipper, useFlipper } from "State/Flipper";
import { Loader, useLoader } from "State/Loader";
import { useScreen } from "State/Screen";
import { TaskQueue } from "Tools/TaskQueue";
import type { Propless } from "Tools/Types";
import "./styles.scss";

export const FullScreenLoader = memo(function FullScreenLoader(_: Propless) {
  const height = useScreen(state => state.height);
  const preloaded = useLoader(state => state.preloaded);
  const loadedSlides = useFlipper(state => state.slides);

  const target = useMemo(() => {
    let max = 10;
    if (preloaded) {
      max += 38;
    }
    return max + loadedSlides * 13;
  }, [preloaded, loadedSlides]);

  const [value, animation] = use60FPS(0, () => {
    if (loadedSlides === 4 && preloaded) {
      Flipper.show();
    } else {
      Loader.loadSlides();
    }
  });

  useEffect(() => {
    TaskQueue.deferTask(() => {
      animation.animate(target, {
        duration: 2000,
        easing: x =>
          x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2,
      });
    }, 0);
  }, [target, animation]);

  return (
    <div className="screen-loader" style={{ height }}>
      <div className="shadow" style={{ scale: `100% ${100 - value}%` }} />
      <div className="counter">
        <span>{Math.round(value)}%</span>
      </div>
    </div>
  );
});
