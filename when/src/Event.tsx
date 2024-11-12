import React, { useState, useEffect } from "react";
import "./Event.css";
import EventView from "./views/EventView";

interface EventProps {
  eventView: EventView;
  start_year: Date;
  pixelsPerTick: number;
  yearPerTick: number;
  onUpdateX: (eventView: EventView, newX: number) => void;
}

function getDayOfYear(date: Date): number {
  const start = new Date(1000, 0, 1);
  start.setFullYear(date.getFullYear());
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
  const [originalX, setOriginalX] = useState(0);
  const years_diff = eventView.date.getFullYear() - start_year.getFullYear();
  const percent_of_last_year = getDayOfYear(eventView.date) / 365;
  const tickPerYear = 1 / yearPerTick;
  const height =
    (years_diff + percent_of_last_year) * tickPerYear * pixelsPerTick +
    pixelsPerTick / 2 +
    4;

  const handleDragStart = (x: number) => {
    setDragging(true);
    setOriginalX(x);
  };

  const handleDragMove = (x: number) => {
    if (dragging) {
      const newX = eventView.x + (x - originalX);
      onUpdateX(eventView, newX);
      setOriginalX(x);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleEndDrag = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (dragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleEndDrag);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleEndDrag);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleEndDrag);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleEndDrag);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleEndDrag);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleEndDrag);
    };
  }, [dragging]);

  return (
    <div
      className="event"
      style={
        {
          "--event-height": `${height - 75}px`,
          "--event-x": `${eventView.x}px`,
          "--z-index": 9999999 - eventView.x,
          "--event-color": eventView.color,
          "--info-display": dragging ? "none" : "block",
        } as React.CSSProperties
      }
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
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
