import EventView from "../views/EventView";

type EventAction =
  | { type: "ADD_EVENT"; payload: EventView }
  | { type: "UPDATE_EVENT"; payload: EventView }
  | { type: "DELETE_EVENT"; payload: { name: string } };

export default EventAction;
