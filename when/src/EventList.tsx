import React from "react";
import Event from "./Event";
import "./EventListStyle.css";

interface EventListProps {
  start: Date;
  end: Date;
  pixelsPerYear: number;
}

function EventList({ start, end, pixelsPerYear }: EventListProps) {
  // set the height of the element to be the difference between the start and end date in years times pixels per year
  // set the width to be 100%

  const years_diff = end.getFullYear() - start.getFullYear();
  const height = (years_diff + 1) * pixelsPerYear;
  return (
    <div
      className="eventlist"
      style={{ "--eventlist-height": `${height}px` } as React.CSSProperties}
    >
      <Event
        name="The start of World War I"
        date={new Date("1914-07-28")}
        location="Europe"
        description="The assassination of Archduke Franz Ferdinand of Austria-Hungary led to the start of World War I."
        pixelsPerYear={pixelsPerYear}
        start_year={start}
      ></Event>
      <Event
        name="The start of World War II"
        date={new Date("1939-09-01")}
        location="Poland"
        description="The German invasion of Poland marked the beginning of World War II."
        pixelsPerYear={pixelsPerYear}
        start_year={start}
      />
      <Event
        name="The birth of the internet"
        date={new Date("1969-10-29")}
        location="UCLA"
        description="The first message was sent over the ARPANET, the precursor to the internet."
        pixelsPerYear={pixelsPerYear}
        start_year={start}
      />
      <Event
        name={"New Millennium"}
        date={new Date("2000-01-01")}
        location={"Everywhere"}
        description={
          "Welcome to the new millennium! The Y2K bug was a bust, and the world is still spinning."
        }
        pixelsPerYear={pixelsPerYear}
        start_year={start}
      />
      <Event
        name={"Fall of the Berlin Wall"}
        date={new Date("1989-11-09")}
        location={"Berlin, Germany"}
        description={
          "The Berlin Wall, a symbol of the Cold War, fell on this day, marking the end of an era."
        }
        pixelsPerYear={pixelsPerYear}
        start_year={start}
      />
    </div>
  );
}

export default EventList;
