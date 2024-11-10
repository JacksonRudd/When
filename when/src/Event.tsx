import "./Event.css";
import EventView from "./views/EventView";

interface EventProps {
  eventView: EventView;
  start_year: Date;
  pixelsPerTick: number;
  yearPerTick: number;
}

function getDayOfYear(date: Date): number {
  // Create a new date object representing the start of the year
  const start = new Date(date.getFullYear(), 0, 1);

  // Calculate the difference in milliseconds
  const diff = date.getTime() - start.getTime();

  // Convert milliseconds to days
  return Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
}

function Event({
  eventView,
  pixelsPerTick,
  start_year,
  yearPerTick,
}: EventProps) {
  const years_diff = eventView.date.getFullYear() - start_year.getFullYear();
  const percent_of_last_year = getDayOfYear(eventView.date) / 365;
  const tickPerYear = 1 / yearPerTick;
  const height =
    (years_diff + percent_of_last_year) * tickPerYear * pixelsPerTick +
    pixelsPerTick / 2 +
    4;

  return (
    <div
      className="event"
      style={
        {
          "--event-height": `${height - 75}px`,
          "--event-x": `${eventView.x}px`,
          "--event-color": eventView.color,
        } as React.CSSProperties
      }
    >
      <p className="eventname">{eventView.name}</p>
      {/* add description an location on hover in a div that starts hidden*/}
      <div className="eventinfo">
        <p>{eventView.description}</p>
        <p>{eventView.location}</p>
      </div>
    </div>
  );
}

export default Event;
