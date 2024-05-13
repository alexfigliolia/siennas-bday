import { State } from "@figliolia/galena";
import { Slider } from "State/Slider";
import variables from "Styles/exports.module.scss";
import { TaskQueue } from "Tools/TaskQueue";
import type { IFlipper } from "./types";

export class FlipperModel extends State<IFlipper> {
  public readonly MAX_SLIDES = 4;
  static flipDuration = this.sliceUnits(variables.flipDuration);
  static shrinkDuration = this.sliceUnits(variables.shrinkDuration);
  constructor() {
    super("Page Flip", {
      slides: 0,
      flip: true,
      shrink: true,
      classes: "flip shrink",
    });
  }

  public classList() {
    const tokens: string[] = [];
    const { flip, shrink } = this.getState();
    if (shrink) {
      tokens.push("shrink");
    }
    if (flip) {
      tokens.push("flip");
    }
    return tokens.join(" ");
  }

  public hide() {
    this.shrink();
    TaskQueue.deferTask(() => {
      this.flip();
    }, FlipperModel.shrinkDuration);
  }

  public show() {
    this.unflip();
    TaskQueue.deferTask(() => {
      this.unshrink();
    }, FlipperModel.flipDuration);
  }

  public flip() {
    this.wrapUpdate(state => {
      state.flip = true;
    });
  }

  public unflip() {
    this.wrapUpdate(state => {
      state.flip = false;
    });
  }

  public shrink() {
    this.wrapUpdate(state => {
      state.shrink = true;
    });
  }

  public unshrink() {
    this.wrapUpdate(state => {
      state.shrink = false;
    });
    TaskQueue.deferTask(() => {
      Slider.activate(0);
    }, FlipperModel.shrinkDuration);
  }

  public registerSlide() {
    this.update(state => {
      state.slides = state.slides + 1;
    });
  }

  private wrapUpdate(callback: (state: IFlipper) => void) {
    this.update(state => {
      callback(state);
      state.classes = this.classList();
    });
  }

  private static sliceUnits(duration: string) {
    return parseInt(duration.slice(0, -2));
  }
}
