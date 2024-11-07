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

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    const payload: EventModel = {
      name: name,
      date: new Date(date),
      location: location,
      description: description,
    };
    onSubmit(payload);
  };

  const uniqueSuffix = Date.now().toString();

  return (
    <form
      className="event-form"
      autoComplete="new-password"
      onSubmit={handleAddEvent}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name={`name-${uniqueSuffix}`}
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="new-password"
      />

      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        name={`date-${uniqueSuffix}`}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        autoComplete="new-password"
      />

      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        name={`location-${uniqueSuffix}`}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        autoComplete="new-password"
      />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name={`description-${uniqueSuffix}`}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        autoComplete="new-password"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default EventForm;
