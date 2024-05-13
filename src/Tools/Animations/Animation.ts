import { EventEmitter } from "@figliolia/event-emitter";
import { FPS } from "./FPS";
import type { IFPSGenerator, Stream } from "./types";

export class Animation {
  private value: number;
  private startValue: number;
  private ID: string | null = null;
  private start: number | null = null;
  private Emitter = new EventEmitter<Stream>();
  constructor(initialValue = 0) {
    this.value = initialValue;
    this.startValue = this.value;
    this.nextFrame = this.nextFrame.bind(this);
  }

  public animate(toValue: number, configuration: IFPSGenerator) {
    this.reset();
    this.ID = FPS.register(() => this.nextFrame(toValue, configuration));
  }

  public cancel() {
    this.reset();
    this.Emitter.emit("cancel", this);
  }

  public on<K extends keyof Stream>(
    ...args: Parameters<typeof this.Emitter.on<K>>
  ) {
    return this.Emitter.on(...args);
  }

  public off<K extends keyof Stream>(
    ...args: Parameters<typeof this.Emitter.off<K>>
  ) {
    return this.Emitter.off(...args);
  }

  private nextFrame(toValue: number, configuration: IFPSGenerator) {
    if (!this.start) {
      this.start = performance.now();
    }
    const { duration, easing } = configuration;
    const frame = performance.now();
    const offset = Math.min(duration, frame - this.start);
    const percent = offset / duration;
    const nextPercent = easing(percent);
    this.value = this.startValue + (toValue - this.startValue) * nextPercent;
    this.Emitter.emit("update", [this.value, percent]);
    if (offset === duration) {
      this.startValue = this.value;
      this.Emitter.emit("complete", this);
      this.reset();
    }
  }

  private reset() {
    if (!this.ID) {
      return;
    }
    FPS.remove(this.ID);
    this.ID = null;
    this.start = null;
    this.startValue = this.value;
  }
}
