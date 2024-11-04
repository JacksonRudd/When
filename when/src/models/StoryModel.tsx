import EventModel from "./EventModel";

interface StoryModel {
  id: string;
  title: string;
  events: EventModel[];
}

const getEarliestEvent = (storyModel: StoryModel) => {
  let earliestEvent = storyModel.events[0];
  storyModel.events.forEach((event) => {
    if (event.date < earliestEvent.date) {
      earliestEvent = event;
    }
  });
  return earliestEvent;
};

const getMostRecentEvent = (storyModel: StoryModel) => {
  let lastEvent = storyModel.events[0];
  storyModel.events.forEach((event) => {
    if (event.date > lastEvent.date) {
      lastEvent = event;
    }
  });
  return lastEvent;
};

export default StoryModel;
export { getEarliestEvent, getMostRecentEvent };
