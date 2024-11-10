import React from "react";
import Event from "./Event";
import "./EventListStyle.css";
import EventView from "./views/EventView";
import EventAction from "./models/actions";

interface EventListProps {
  start: Date;
  end: Date;
  pixelsPerTick: number;
  eventViews: EventView[];
  yearPerTick: number;
  dispatch: React.Dispatch<any>;
}

function EventList({
  start,
  end,
  pixelsPerTick,
  eventViews,
  yearPerTick,
  dispatch,
}: EventListProps) {
  const years_diff = end.getFullYear() - start.getFullYear();
  console.log("start", start);
  console.log("end", end);
  console.log("years_diff", years_diff);
  const tickPerYears = 1 / yearPerTick;
  console.log("tickPerYears", tickPerYears);
  console.log("pixelsPerTick", pixelsPerTick);
  const height =
    (years_diff + 1) * tickPerYears * pixelsPerTick + pixelsPerTick / 2;

  function onDrag(eventView: EventView, newX: number): void {
    const message: EventAction = {
      type: "UPDATE_EVENT",
      payload: { ...eventView, x: newX },
    };
    dispatch(message);
  }

  return (
    <div
      className="eventlist"
      style={
        {
          "--eventlist-height": `${height}px`,
        } as React.CSSProperties
      }
    >
      {eventViews.map((eventView) => (
        <Event
          key={eventView.name}
          eventView={eventView}
          pixelsPerTick={pixelsPerTick}
          yearPerTick={yearPerTick}
          start_year={start}
          onUpdateX={onDrag}
        />
      ))}
    </div>
  );
}

export default EventList;
