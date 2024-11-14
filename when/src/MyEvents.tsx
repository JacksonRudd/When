import EventModel from "./models/EventModel";
import "./MyEvents.css";

interface MyEventsProps {
  userAddedEvents: EventModel[];
  deleteEvent: (event: EventModel) => void;
}

function MyEvents({ userAddedEvents, deleteEvent }: MyEventsProps) {
  return (
    <div className="my-events">
      <table className="my-events-table">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Description</th>
            <th>Location</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userAddedEvents.map((event) => (
            <tr key={event.name}>
              <td>{event.name}</td>
              <td>{event.description}</td>
              <td>{event.location}</td>
              <td>{event?.date.toDateString()}</td>
              <td>
                <button onClick={() => deleteEvent(event)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyEvents;
