import { createUseState } from "@figliolia/react-galena";
import { FlipperModel } from "Models/FlipperModel";

export const Flipper = new FlipperModel();
export const useFlipper = createUseState(Flipper);
