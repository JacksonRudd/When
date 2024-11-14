import EventForm from "./EventForm";
import EventModel from "./models/EventModel";
import "./UserAddedEvents.css";

interface UserAddedEventsProps {
  userAddedEvents: EventModel[];
  addUserEvent: (event: EventModel) => void;
  deleteEvent: (event: EventModel) => void;
}

function UserAddedEvents({
  userAddedEvents,
  addUserEvent,
  deleteEvent,
}: UserAddedEventsProps) {
  return (
    <div className="user-added-events">
      {" "}
      <h1>New Events</h1>
      <EventForm onSubmit={addUserEvent}></EventForm>
      <h2>My Events</h2>
      {userAddedEvents.map((event) => (
        <div key={event.name} className="user-added-event">
          <button onClick={() => deleteEvent(event)}>Delete</button>
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          <p>{event.location}</p>
        </div>
      ))}
    </div>
  );
}

export default UserAddedEvents;
