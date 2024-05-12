import React, { memo, useMemo, useRef } from "react";
import { Ripples } from "@figliolia/ripples";
import { Page } from "Components/Page";
import { SlideContext } from "Contexts/SlideContext";
import { useMount } from "Hooks/useMount";
import { useSlider } from "State/Slider";
import type { OptionalChildren } from "Tools/Types";
import "./styles.scss";

export const Slide = memo(function Slide({ children, index }: Props) {
  const activeIndex = useSlider(state => state.index);
  const active = useMemo(() => activeIndex === index, [activeIndex, index]);
  const classes = useMemo(() => (active ? "active" : ""), [active]);
  const ripples = useRef<Ripples>();
  const node = useRef<HTMLDivElement>(null);

  useMount(() => {
    if (!node.current) {
      return;
    }
    ripples.current = new Ripples(node.current, {
      resolution: 512,
      dropRadius: 10,
      perturbance: 0.02,
    });
  });

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
