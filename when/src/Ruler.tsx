import "./Ruler.css";

interface RulerProps {
  start: Date;
  end: Date;
  pixelsPerTick: number;
  yearsPerTick: number;
}
function Ruler({ start, end, pixelsPerTick, yearsPerTick }: RulerProps) {
  const length = end.getFullYear() - start.getFullYear() + 1;
  // I want to set a var in the css for pixelsPerTick
  const rulerStyle = document.createElement("style");
  rulerStyle.innerHTML = `:root { --pixelsPerTick: ${pixelsPerTick}px; }`;
  document.head.appendChild(rulerStyle);
  return (
    <div className="ruler">
      <ol>
        {Array.from({ length: length }, (_, i) => (
          <li
            key={i * yearsPerTick}
            className={
              (start.getFullYear() + i * yearsPerTick) % (5 * yearsPerTick) ===
              0
                ? "divisible-by-five"
                : ""
            }
          >
            {start.getFullYear() + i * yearsPerTick}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Ruler;
