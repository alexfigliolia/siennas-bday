import { connectMulti } from "@figliolia/react-galena";
import { Flipper } from "./Flipper";
import { Loader } from "./Loader";
import { Screen } from "./Screen";

export const connectInitialization = connectMulti(Loader, Screen, Flipper);
