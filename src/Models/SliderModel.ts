import { State } from "@figliolia/galena";
import type { ISlider } from "./types";

export class SliderModel extends State<ISlider> {
  constructor() {
    super("Slider", {
      index: -1,
    });
  }

  public activate(index: number) {
    this.update(state => {
      state.index = index;
    });
  }
}
