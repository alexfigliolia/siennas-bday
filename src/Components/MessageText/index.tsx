import React, { memo } from "react";
import { useSplitText } from "Hooks/useSplitText";
import type { Propless } from "Tools/Types";
import "./styles.scss";

export const MessageText = memo(function MessageText(_: Propless) {
  const HTML = useSplitText(
    "Wishing you another year of fun and happiness. I hope you had a great birthday party with all of your friends and got all the gifts you could dream of! Happy second Birthday ❤️",
    index => {
      const delay = index * 20;
      return `transition: opacity 0.25s ${delay}ms, transform 1s ${delay}ms cubic-bezier(0.34, 1.56, 0.64, 1);`;
    },
  );

  return (
    <div className="message">
      <p dangerouslySetInnerHTML={{ __html: HTML }} />
    </div>
  );
});
