import EventModel from "../models/EventModel";

interface EventView {
  name: string; // should be unique
  date: Date;
  location: string;
  description: string;
  x: number;
  color: string;
}
const colors = ["red", "blue", "green", "purple", "orange", "pink"];

function eventNameToColor(eventName: string): string {
  return colors[
    Math.abs(
      eventName.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
        colors.length
    )
  ];
}

function randomX(): number {
  return Math.floor(Math.random() * 1000);
}

function eventModelToEventModelView(eventModel: EventModel): EventView {
  return {
    name: eventModel.name,
    date: eventModel.date,
    location: eventModel.location,
    description: eventModel.description,
    x: randomX(),
    color: eventNameToColor(eventModel.name),
  };
}

export default EventView;
export { eventModelToEventModelView };
