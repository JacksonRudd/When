import "./Event.css";

function Event() {
  // add constants for the event name, date, and location and  description
  // for now let's make a simple event, and go with the first fall of the berlin wall
  const eventName = "Fall of the Berlin Wall";
  const eventDate = new Date("1989-11-09");
  const eventLocation = "Berlin, Germany";
  const eventDescription =
    "The Berlin Wall was a guarded concrete barrier that physically and ideologically divided Berlin from 1961 to 1989. Construction of the wall was commenced by the German Democratic Republic on 13 August 1961. The Wall cut off West Berlin from surrounding East Germany, including East Berlin. The fall of the Berlin Wall was the pivotal event that led to the end of the Cold War.";

  return (
    <div className="event">
      <h2>{eventName}</h2>
    </div>
  );
}

export default Event;
