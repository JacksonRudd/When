import EventList from "./EventList";
import StoryModel from "./views/StoryModel";
import Ruler from "./Ruler";
import "./Timeline.css";
import {
  getFirstAndLastYearOrDefault,
  getTimelineParameters,
} from "./models/timelineFunctions";

interface timelineProps {
  storyState: StoryModel;
  dispatch: React.Dispatch<any>;
}

function Timeline({ storyState, dispatch }: timelineProps) {
  // get the first date (or 1905) then pipe to subtract five years

  let { startYear, endYear } = getFirstAndLastYearOrDefault(storyState);

  const { start, end, pixelsPerTick, yearsPerTick } = getTimelineParameters(
    startYear,
    endYear,
    window.innerHeight
  );

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
        eventViews={storyState.events}
        yearPerTick={yearsPerTick}
        dispatch={dispatch}
      ></EventList>
    </div>
  );
}

export default Timeline;
