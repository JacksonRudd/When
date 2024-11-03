import EventList from "./EventList";
import Ruler from "./Ruler";
import "./Timeline.css";

function Timeline() {
  const start = new Date("1900");
  const end = new Date("2020");
  const pixelsPerYear = 50;
  return (
    <div>
      <div className="timeline">
        <Ruler></Ruler>
        <EventList
          start={start}
          end={end}
          pixelsPerYear={pixelsPerYear}
        ></EventList>
      </div>
    </div>
  );
}

export default Timeline;
