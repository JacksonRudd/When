import React from "react";
import Event from "./Event";
import "./EventListStyle.css";
import EventModel from "./models/EventModel";

interface EventListProps {
  start: Date;
  end: Date;
  pixelsPerTick: number;
  eventModels: EventModel[];
  yearPerTick: number;
}

function EventList({
  start,
  end,
  pixelsPerTick,
  eventModels,
  yearPerTick,
}: EventListProps) {
  // set the height of the element to be the difference between the start and end date in years times pixels per year
  // set the width to be 100%

  const years_diff = end.getFullYear() - start.getFullYear();
  const height = (years_diff + 1) * pixelsPerTick;

  const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
  function eventNameToColor(eventName: string): string {
    return colors[
      Math.abs(
        eventName.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
          colors.length
      )
    ];
  }
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
          color={eventNameToColor(eventModel.name)}
        />
      ))}
    </div>
  );
}

export default EventList;
