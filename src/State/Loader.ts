import { createUseState } from "@figliolia/react-galena";
import { LoaderModel } from "Models/LoaderModel";

export const Loader = new LoaderModel();
export const useLoader = createUseState(Loader);
