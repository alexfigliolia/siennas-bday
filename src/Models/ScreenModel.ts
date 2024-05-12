import { State } from "@figliolia/galena";
import type { IScreen } from "./types";

export class ScreenModel extends State<IScreen> {
  constructor() {
    super("Screen", {
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  public initialize() {
    window.addEventListener("resize", this.onResize);
  }

  public destroy() {
    window.addEventListener("resize", this.onResize);
  }

  private onResize = () => {
    this.update(state => {
      state.width = window.innerWidth;
      state.height = window.innerHeight;
    });
  };
}
