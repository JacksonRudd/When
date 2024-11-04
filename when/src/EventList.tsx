import React from "react";
import Event from "./Event";
import "./EventListStyle.css";
import EventModel from "./models/EventModel";

interface EventListProps {
  start: Date;
  end: Date;
  pixelsPerYear: number;
  eventModels: EventModel[];
}

function EventList({ start, end, pixelsPerYear, eventModels }: EventListProps) {
  // set the height of the element to be the difference between the start and end date in years times pixels per year
  // set the width to be 100%

  const years_diff = end.getFullYear() - start.getFullYear();
  const height = (years_diff + 1) * pixelsPerYear;
  return (
    <div
      className="eventlist"
      style={{ "--eventlist-height": `${height}px` } as React.CSSProperties}
    >
      {eventModels.map((eventModel) => (
        <Event
          name={eventModel.name}
          date={eventModel.date}
          location={eventModel.location}
          description={eventModel.description}
          pixelsPerYear={pixelsPerYear}
          start_year={start}
        />
      ))}
    </div>
  );
}

export default EventList;
