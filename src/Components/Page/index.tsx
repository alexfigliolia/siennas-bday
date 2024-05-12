import type { ForwardedRef } from "react";
import React, { forwardRef, memo } from "react";
import { useScreen } from "State/Screen";
import type { OptionalChildren } from "Tools/Types";
import "./styles.scss";

export const Page = memo(
  forwardRef(function Page(
    { children, classes = "" }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ) {
    const height = useScreen(state => state.height);

    return (
      <div ref={ref} className={`page ${classes}`} style={{ height }}>
        {children}
      </div>
    );
  }),
);

interface Props extends OptionalChildren {
  classes?: string;
}
