export interface IScreen {
  height: number;
  width: number;
}

export interface IFlipper {
  flip: boolean;
  shrink: boolean;
  classes: string;
  slides: number;
}

export interface ISlider {
  index: number;
}

export interface ILoader {
  slides: boolean;
  preloaded: boolean;
}
