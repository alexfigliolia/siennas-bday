import React, { memo, useEffect, useMemo, useRef } from "react";
import { Ripples } from "@figliolia/ripples";
import { Page } from "Components/Page";
import { SlideContext } from "Contexts/SlideContext";
import { Flipper } from "State/Flipper";
import { useSlider } from "State/Slider";
import type { OptionalChildren } from "Tools/Types";
import "./styles.scss";

export const Slide = memo(function Slide({ children, index }: Props) {
  const node = useRef<HTMLDivElement>(null);
  const activeIndex = useSlider(state => state.index);
  const active = useMemo(() => activeIndex === index, [activeIndex, index]);
  const classes = useMemo(() => (active ? "active" : ""), [active]);

  useEffect(() => {
    if (!node.current) {
      return;
    }
    const rips = new Ripples(node.current, {
      resolution: 512,
      dropRadius: 10,
      perturbance: 0.02,
      onInitialized: () => {
        Flipper.registerSlide();
      },
    });
    return () => {
      rips.destroy();
    };
  }, []);

  return (
    <SlideContext.Provider value={active}>
      <Page ref={node} classes={classes}>
        <div>{children}</div>
      </Page>
    </SlideContext.Provider>
  );
});

interface Props extends OptionalChildren {
  index: number;
}
