export const useSplitText = (
  text: string,
  style?: (index: number, total: number) => string,
) => {
  let max = 0;
  let count = -1;
  const words = text.split(" ");
  for (const word of words) {
    max += word.length;
  }
  return words
    .map(t => {
      return `<div>
        ${t
          .split("")
          .map(v => {
            count++;
            const spanStyle = style?.(count, max) ?? "";
            return `<span style="${spanStyle}">${v}</span>`;
          })
          .join("")}</div>`;
    })
    .join("<div>\xa0</div>");
};
