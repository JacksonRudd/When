import EventModel from "../models/EventModel";
import eventsData from "./events.json";

const events: Events = eventsData;

interface EventDataDetails {
  event_name: string;
  event_description: string;
  date: string;
  location: string;
  year: string;
  month: string;
  country: string;
}

type Events = {
  [key: string]: EventDataDetails;
};

const typedEvents: Events = events;

function event_data_to_model(event_data: EventDataDetails): EventModel {
  const year = parseInt(event_data.year) || 0;
  const month = parseInt(event_data.month) - 1 || 0; // Month needs to be 0-based
  const day = parseInt(event_data.date) || 1;

  // Ensure year, month, and date are valid numbers
  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    throw new Error("Invalid date parts in event_data.");
  }

  const date = new Date(year, month, day);

  return {
    name: event_data.event_name,
    description: event_data.event_description,
    location: event_data.location,
    date: date,
  };
}

function get_event_by_name(event_name: string): EventModel {
  const event_data: EventDataDetails = typedEvents[event_name];
  const event_model = event_data_to_model(event_data);
  return event_model;
}

function get_events_by_substring(substring: string): EventModel[] {
  const matching_events: EventModel[] = Object.keys(typedEvents)
    .filter((event_name) =>
      event_name.toLowerCase().includes(substring.toLowerCase())
    )
    .map((event_name) => get_event_by_name(event_name));
  return matching_events;
}

export { get_events_by_substring, get_event_by_name };
