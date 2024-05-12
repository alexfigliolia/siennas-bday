export interface IScreen {
  height: number;
  width: number;
}

export interface IFlipper {
  active: boolean;
  flip: boolean;
  shrink: boolean;
  classes: string;
}

export interface ISlider {
  index: number;
}
