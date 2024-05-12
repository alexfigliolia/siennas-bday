import { useEffect, useRef } from "react";
import { PageSwitch } from "@figliolia/page-switch";
import { useScreen } from "State/Screen";
import { Slider } from "State/Slider";
import { useMount } from "./useMount";

export const usePageSwitch = (ID: string) => {
  const PW = useRef<PageSwitch>();
  const width = useScreen(state => state.width);

  useMount(() => {
    PW.current = new PageSwitch(ID, {
      arrowKey: true,
      autoplay: false,
      direction: width >= 957 ? 1 : 0,
      duration: 750,
      ease: "ease-out",
      loop: true,
      mouse: true,
      mousewheel: true,
      transition: width >= 957 ? "scrollCoverY" : "scrollCoverX",
    });
    PW.current.on("after", index => Slider.activate(index));
  });

  useEffect(() => {
    if (!PW.current) {
      return;
    }
    if (width >= 957 && PW.current.transitionName === "scrollCoverX") {
      PW.current.direction = 1;
      PW.current.setTransition("scrollCoverY");
    } else if (width < 957 && PW.current.transitionName === "scrollCoverY") {
      PW.current.direction = 0;
      PW.current.setTransition("scrollCoverX");
    }
  }, [width, PW]);

  return PW.current;
};
