import "./Ruler.css";

interface RulerProps {
  start: Date;
  end: Date;
  pixelsPerYear: number;
}
function Ruler({ start, end, pixelsPerYear }: RulerProps) {
  const length = end.getFullYear() - start.getFullYear() + 1;
  // I want to set a var in the css for pixelsPerYear
  const rulerStyle = document.createElement("style");
  rulerStyle.innerHTML = `:root { --pixelsPerYear: ${pixelsPerYear}px; }`;
  document.head.appendChild(rulerStyle);
  return (
    <div className="ruler">
      <ol>
        {Array.from({ length: length }, (_, i) => (
          <li
            key={i}
            className={
              (start.getFullYear() + i) % 5 === 0 ? "divisible-by-five" : ""
            }
          >
            {start.getFullYear() + i}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Ruler;
