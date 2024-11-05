import "./Ruler.css";

interface RulerProps {
  start: Date;
  end: Date;
}
function Ruler({ start, end }: RulerProps) {
  const length = end.getFullYear() - start.getFullYear() + 1;
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
