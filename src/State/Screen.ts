import { createUseState } from "@figliolia/react-galena";
import { ScreenModel } from "Models/ScreenModel";

export const Screen = new ScreenModel();
export const useScreen = createUseState(Screen);
