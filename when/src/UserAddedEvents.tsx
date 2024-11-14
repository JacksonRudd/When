import { useState } from "react";
import EventForm from "./EventForm";
import EventModel from "./models/EventModel";
import MyEvents from "./MyEvents";
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
  const [showAddEvent, setShowAddEvent] = useState(false);

  const addEventFromForm = (event: EventModel) => {
    addUserEvent(event);
    setShowAddEvent(false);
  };

  return (
    <div className="user-added-events">
      <h1>My Events</h1>
      <p>
        When you add your own events, they become searchable and can be added to
        your timelines{" "}
      </p>
      <button
        className="add-event-button"
        onClick={() => setShowAddEvent(!showAddEvent)}
      >
        {" "}
        Add Event
      </button>
      {showAddEvent && <EventForm onSubmit={addEventFromForm}></EventForm>}
      <MyEvents userAddedEvents={userAddedEvents} deleteEvent={deleteEvent} />
    </div>
  );
}

export default UserAddedEvents;
