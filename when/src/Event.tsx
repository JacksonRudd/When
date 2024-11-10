import React, { useState } from "react";
import "./Event.css";
import EventView from "./views/EventView";

interface EventProps {
  eventView: EventView;
  start_year: Date;
  pixelsPerTick: number;
  yearPerTick: number;
  onUpdateX: (eventView: EventView, newX: number) => void; // Prop to update x position
}

function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 1);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
}

function Event({
  eventView,
  pixelsPerTick,
  start_year,
  yearPerTick,
  onUpdateX,
}: EventProps) {
  const [dragging, setDragging] = useState(false);
  const [originalMouseX, setOriginalMouseX] = useState(0);

  const years_diff = eventView.date.getFullYear() - start_year.getFullYear();
  const percent_of_last_year = getDayOfYear(eventView.date) / 365;
  const tickPerYear = 1 / yearPerTick;
  const height =
    (years_diff + percent_of_last_year) * tickPerYear * pixelsPerTick +
    pixelsPerTick / 2 +
    4;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
    setOriginalMouseX(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (dragging) {
      const newX = eventView.x + (e.x - originalMouseX);
      console.log(newX);
      onUpdateX(eventView, newX); // Call the prop to update x position
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  React.useEffect(() => {
    if (dragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <div
      className="event"
      style={
        {
          "--event-height": `${height - 75}px`,
          "--event-x": `${eventView.x}px`, // Reflects the updated x position
          "--z-index": 9999999 - eventView.x,
          "--event-color": eventView.color,
          "--info-display": dragging ? "none" : "block",
        } as React.CSSProperties
      }
      onMouseDown={handleMouseDown}
    >
      <p className="eventname">{eventView.name}</p>
      <div className="eventinfo">
        <div className="eventtext">
          <p>{eventView.description}</p>
        </div>
        <div className="eventtext">
          <p>{eventView.location}</p>
        </div>
      </div>
    </div>
  );
}

export default Event;
