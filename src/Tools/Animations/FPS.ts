import { AutoIncrementingID } from "@figliolia/event-emitter";
import type { Callback } from "Tools/Types";

export class FPS {
  private static IDs = new AutoIncrementingID();
  private static lastFrame: number | null = null;
  private static storage = new Map<string, Callback>();

  public static register(callback: Callback) {
    const ID = this.IDs.get();
    this.storage.set(ID, callback);
    if (!this.lastFrame) {
      this.animate();
    }
    return ID;
  }

  public static remove(ID: string) {
    this.storage.delete(ID);
  }

  private static animate() {
    this.lastFrame = requestAnimationFrame(() => {
      if (!this.storage.size && this.lastFrame) {
        cancelAnimationFrame(this.lastFrame);
        this.lastFrame = null;
        return;
      }
      for (const [_, callback] of this.storage) {
        callback();
      }
      this.animate();
    });
  }
}
