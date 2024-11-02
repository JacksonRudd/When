import Ruler from "./Ruler";
import "./Timeline.css";

function Timeline() {
  return (
    <div>
      <div className="timeline">
        <Ruler></Ruler>
        {/* To figure out next time */}
        <div className="event">Some Event</div>
      </div>
    </div>
  );
}

export default Timeline;
