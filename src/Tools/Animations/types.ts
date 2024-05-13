import type { Animation } from "./Animation";

export type Stream = {
  update: [value: number, progress: number];
  cancel: Animation;
  complete: Animation;
};

export type EasingFN = (progress: number) => number;

export interface IFPSGenerator {
  easing: EasingFN;
  duration: number;
}
