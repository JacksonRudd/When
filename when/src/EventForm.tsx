import { useState } from "react";
import EventModel from "./models/EventModel";
import "./EventForm.css";

interface EventFormProps {
  onSubmit: (event: EventModel) => void;
}

function EventForm({ onSubmit }: EventFormProps) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleAddEvent = () => {
    const payload: EventModel = {
      name: name,
      date: new Date(date),
      location: location,
      description: description,
    };
    onSubmit(payload);
  };

  return (
    <div className="event-form">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="button" onClick={handleAddEvent}>
        Submit
      </button>
    </div>
  );
}

export default EventForm;
