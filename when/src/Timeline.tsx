import { useState } from "react";
import EventList from "./EventList";
import StoryModel, {
  getEarliestEvent,
  getMostRecentEvent,
} from "./models/StoryModel";
import Ruler from "./Ruler";
import "./Timeline.css";

interface timelineProps {
  storyState: StoryModel;
}
function Timeline({ storyState }: timelineProps) {
  // get the first date (or 1905) then pipe to subtract five years
  const [pixelsPerYear, setPixelsPerYear] = useState(50);

  const handleZoom = (e: React.WheelEvent<HTMLDivElement>) => {
    console.log("zooming", e.deltaY);
    if (e.deltaY < 0) {
      setPixelsPerYear(pixelsPerYear + 1);
    } else {
      setPixelsPerYear(pixelsPerYear - 1);
    }
  };

  const startYear =
    (getEarliestEvent(storyState)?.date.getFullYear() || 1905) - 10;
  const start = new Date(1000, 0, 1);
  const endYear =
    (getMostRecentEvent(storyState)?.date.getFullYear() || 1995) + 50;
  const end = new Date(endYear, 0, 1);
  function yearsPerTickToPixelsPerYear(pixelsPerYear: number): number {
    const index = 50 / pixelsPerYear;
    const options = [1, 2, 5, 10, 20, 50, 100, 200];
    const closest = options.reduce((prev, curr) =>
      Math.abs(curr - index) < Math.abs(prev - index) ? curr : prev
    );

    return closest;
  }
  const yearsPerTick = yearsPerTickToPixelsPerYear(pixelsPerYear); // should have values of 1, 5, 10, 20, 50, 100
  const pixelsPerTick = pixelsPerYear * yearsPerTick; // should have values between 50 and 100
  const eventModels = storyState.events;
  return (
    <div className="timeline">
      <Ruler
        start={start}
        end={end}
        pixelsPerTick={pixelsPerTick}
        yearsPerTick={yearsPerTick}
      ></Ruler>
      <EventList
        start={start}
        end={end}
        pixelsPerTick={pixelsPerTick}
        eventModels={eventModels}
        yearPerTick={yearsPerTick}
      ></EventList>
    </div>
  );
}

export default Timeline;
