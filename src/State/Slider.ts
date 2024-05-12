import { createUseState } from "@figliolia/react-galena";
import { SliderModel } from "Models/SliderModel";

export const Slider = new SliderModel();
export const useSlider = createUseState(Slider);
