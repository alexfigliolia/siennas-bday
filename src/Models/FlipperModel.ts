import { State } from "@figliolia/galena";
import { Slider } from "State/Slider";
import variables from "Styles/exports.module.scss";
import { TaskQueue } from "Tools/TaskQueue";
import type { IFlipper } from "./types";

export class FlipperModel extends State<IFlipper> {
  static flipDuration = this.sliceUnits(variables.flipDuration);
  static shrinkDuration = this.sliceUnits(variables.shrinkDuration);
  constructor() {
    super("Page Flip", {
      flip: true,
      shrink: true,
      active: false,
      classes: "flip shrink",
    });
  }

  public classList() {
    const tokens: string[] = [];
    const { flip, shrink, active } = this.getState();
    if (active) {
      tokens.push("active");
    }
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

  public show(delay = 0) {
    TaskQueue.deferTask(() => {
      this.unflip();
      TaskQueue.deferTask(() => {
        this.unshrink();
      }, FlipperModel.flipDuration);
    }, delay);
  }

  public activate() {
    this.wrapUpdate(state => {
      state.active = true;
    });
    TaskQueue.deferTask(() => {
      this.show();
    }, 2500);
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
