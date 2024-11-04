import EventList from "./EventList";
import StoryModel from "./models/StoryModel";
import Ruler from "./Ruler";
import "./Timeline.css";

interface timelineProps {
  storyState: StoryModel;
}
function Timeline({ storyState }: timelineProps) {
  // subtract five years from the first event to give it some space to render
  const start = new Date("1900");
  const end = new Date("2020");
  const pixelsPerYear = 50;
  const eventModels = storyState.events;
  return (
    <div className="timeline">
      <Ruler></Ruler>
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
