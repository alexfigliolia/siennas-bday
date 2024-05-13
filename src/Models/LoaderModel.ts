import { State } from "@figliolia/galena";
import Slide1Large from "Images/slide-1-large.webp";
import Slide1Small from "Images/slide-1-small.webp";
import Slide2Large from "Images/slide-2-large.webp";
import Slide2Small from "Images/slide-2-small.webp";
import Slide3Large from "Images/slide-3-large.webp";
import Slide3Small from "Images/slide-3-small.webp";
import Slide4Large from "Images/slide-4-large.webp";
import Slide4Small from "Images/slide-4-small.webp";
import type { ILoader } from "./types";

export class LoaderModel extends State<ILoader> {
  constructor() {
    super("Loader", {
      slides: false,
      preloaded: false,
    });
  }

  public async preloadImages() {
    const loadFNs: Promise<any>[] = [];
    const loaded: HTMLImageElement[] = [];
    const imgs = window.innerWidth >= 670 ? this.largeImages : this.smallImages;
    for (let i = 0; i < imgs.length; i++) {
      const img = new Image();
      loadFNs[i] = this.promisify(img);
      img.src = imgs[i];
      loaded[i] = img;
    }
    await Promise.all(loadFNs);
    this.update(state => {
      state.preloaded = true;
    });
  }

  public loadSlides() {
    this.update(state => {
      state.slides = true;
    });
  }

  private promisify(image: HTMLImageElement) {
    return new Promise(resolve => {
      image.onload = resolve;
      image.onerror = resolve;
    });
  }

  private readonly smallImages = [
    Slide1Small,
    Slide2Small,
    Slide3Small,
    Slide4Small,
  ];

  private readonly largeImages = [
    Slide1Large,
    Slide2Large,
    Slide3Large,
    Slide4Large,
  ];
}
