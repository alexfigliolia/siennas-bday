import { useEffect, useMemo, useState } from "react";
import { Animation } from "Tools/Animations/Animation";

export const use60FPS = (
  initialValue = 0,
  onComplete = () => {},
): [value: number, start: Animation] => {
  const [value, setValue] = useState(initialValue);
  const animator = useMemo(() => new Animation(initialValue), [initialValue]);

  useEffect(() => {
    const ID = animator.on("update", ([value]) => setValue(value));
    return () => {
      animator.off("update", ID);
    };
  }, [animator]);

  useEffect(() => {
    const ID = animator.on("complete", onComplete);
    return () => {
      animator.off("complete", ID);
    };
  }, [animator, onComplete]);

  return [value, animator];
};
