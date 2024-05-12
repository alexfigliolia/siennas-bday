import "react";

declare module "react" {
  export interface CSSProperties {
    "--inject-background"?: string;
  }
}
