import "./Event.css";

interface EventProps {
  name: string;
  date: Date;
  location: string;
  description: string;
  pixelsPerYear: number;
  start_year: Date;
}

function Event({
  name: eventName,
  date,
  location,
  description,
  pixelsPerYear,
  start_year,
}: EventProps) {
  // set the height of the element to be the difference between the start and end date in years times pixels per year
  // set the width to be 100%
  const days_diff = Math.floor(
    (date.getTime() - start_year.getTime()) / (1000 * 60 * 60 * 24)
  );
  const height = (days_diff * pixelsPerYear) / 365 + pixelsPerYear / 2;

  return (
    <div
      className="event"
      style={
        {
          "--event-height": `${height - 75}px`,
          "--event-x": `${300}px`,
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
