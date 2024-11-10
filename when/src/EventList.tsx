import React from "react";
import Event from "./Event";
import "./EventListStyle.css";
import EventView from "./views/EventView";

interface EventListProps {
  start: Date;
  end: Date;
  pixelsPerTick: number;
  eventViews: EventView[];
  yearPerTick: number;
}

function EventList({
  start,
  end,
  pixelsPerTick,
  eventViews,
  yearPerTick,
}: EventListProps) {
  const years_diff = end.getFullYear() - start.getFullYear();
  const height = (years_diff + 1) * pixelsPerTick;

  return (
    <div
      className="eventlist"
      style={{ "--eventlist-height": `${height}px` } as React.CSSProperties}
    >
      {eventViews.map((eventView) => (
        <Event
          eventView={eventView}
          pixelsPerTick={pixelsPerTick}
          yearPerTick={yearPerTick}
          start_year={start}
        />
      ))}
    </div>
  );
}

export default EventList;
