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
  const startYear =
    (getEarliestEvent(storyState)?.date.getFullYear() || 1905) - 10;
  const start = new Date(startYear, 0, 1);
  const endYear =
    (getMostRecentEvent(storyState)?.date.getFullYear() || 1995) + 50;
  const end = new Date(endYear, 0, 1);
  const pixelsPerYear = 50;
  const eventModels = storyState.events;
  return (
    <div className="timeline">
      <Ruler start={start} end={end}></Ruler>
      <EventList
        start={start}
        end={end}
        pixelsPerYear={pixelsPerYear}
        eventModels={eventModels}
      ></EventList>
    </div>
  );
}

export default Timeline;
