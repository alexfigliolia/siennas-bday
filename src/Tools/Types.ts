import type { ReactNode } from "react";

export type Propless = Record<string, never>;

export interface OptionalChildren {
  children?: ReactNode;
}

export type Callback<T extends any[] = never[]> = (...args: T) => void;
