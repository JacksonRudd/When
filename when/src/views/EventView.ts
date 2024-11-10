import EventModel from "../models/EventModel";

interface EventModelView {
  name: string; // should be unique
  date: Date;
  location: string;
  description: string;
  color: string;
  x: number;
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

function eventModelToEventModelView(eventModel: EventModel): EventModelView {
  return {
    name: eventModel.name,
    date: eventModel.date,
    location: eventModel.location,
    description: eventModel.description,
    x: randomX(),
    color: eventNameToColor(eventModel.name),
  };
}

export default EventModelView;
export { eventModelToEventModelView };
