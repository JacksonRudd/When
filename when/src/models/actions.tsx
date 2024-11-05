import EventModel from "./EventModel";

type EventAction =
  | { type: "ADD_EVENT"; payload: EventModel }
  | { type: "UPDATE_EVENT"; payload: EventModel }
  | { type: "DELETE_EVENT"; payload: { name: string } };

export default EventAction;
