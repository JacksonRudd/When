import "./Ruler.css";

function Ruler() {
  return (
    <div className="ruler">
      <ol>
        {Array.from({ length: 121 }, (_, i) => (
          <li key={i} className={i % 5 === 0 ? "divisible-by-five" : ""}>
            {1900 + i}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Ruler;
