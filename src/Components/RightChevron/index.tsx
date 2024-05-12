import React, { memo } from "react";

export const RightChevron = memo(
  function RightChevron({ stroke = "#fff" }: Props) {
    return (
      <svg viewBox="0 0 24 24">
        <path
          fill={stroke}
          d="M7.5,22a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L15.09,12,6.79,3.71A1,1,0,1,1,8.21,2.29l9,9a1,1,0,0,1,0,1.42l-9,9A1,1,0,0,1,7.5,22Z"
        />
      </svg>
    );
  },
  (pp, np) => pp.stroke === np.stroke,
);

interface Props {
  stroke?: string;
}
