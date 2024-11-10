import "./Event.css";

interface EventProps {
  name: string;
  date: Date;
  location: string;
  description: string;
  pixelsPerTick: number;
  start_year: Date;
  yearPerTick: number;
  color: string;
  eventX: number;
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
  name: eventName,
  date,
  location,
  description,
  pixelsPerTick,
  start_year,
  yearPerTick,
  color,
  eventX,
}: EventProps) {
  const years_diff = date.getFullYear() - start_year.getFullYear();
  const percent_of_last_year = getDayOfYear(date) / 365;
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
          "--event-x": `${eventX}px`,
          "--event-color": color,
        } as React.CSSProperties
      }
    >
      <p className="eventname">{eventName}</p>
      {/* add description an location on hover in a div that starts hidden*/}
      <div className="eventinfo">
        <p>{description}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default Event;
