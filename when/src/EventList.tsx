import React from "react";
import Event from "./Event";
import "./EventList.css";

interface EventListProps {
  start: Date;
  end: Date;
  pixelsPerYear: number;
}

function EventList({ start, end, pixelsPerYear }: EventListProps) {
  // set the height of the element to be the difference between the start and end date in years times pixels per year
  // set the width to be 100%

  const years_diff = end.getFullYear() - start.getFullYear() + 1;
  const height = years_diff * pixelsPerYear;
  return (
    <div
      className="eventlist"
      style={{ "--eventlist-height": `${height}px` } as React.CSSProperties}
    >
      <Event></Event>
    </div>
  );
}

export default EventList;
