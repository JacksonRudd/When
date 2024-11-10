import React from "react";
import Event from "./Event";
import "./EventListStyle.css";
import EventModelView from "./views/EventView";

interface EventListProps {
  start: Date;
  end: Date;
  pixelsPerTick: number;
  eventModels: EventModelView[];
  yearPerTick: number;
}

function EventList({
  start,
  end,
  pixelsPerTick,
  eventModels,
  yearPerTick,
}: EventListProps) {
  const years_diff = end.getFullYear() - start.getFullYear();
  const height = (years_diff + 1) * pixelsPerTick;

  return (
    <div
      className="eventlist"
      style={{ "--eventlist-height": `${height}px` } as React.CSSProperties}
    >
      {eventModels.map((eventModel) => (
        <Event
          key={eventModel.name}
          name={eventModel.name}
          date={eventModel.date}
          location={eventModel.location}
          description={eventModel.description}
          pixelsPerTick={pixelsPerTick}
          yearPerTick={yearPerTick}
          start_year={start}
          color={eventModel.color}
          eventX={eventModel.x}
        />
      ))}
    </div>
  );
}

export default EventList;
