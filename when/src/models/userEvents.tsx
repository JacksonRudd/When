import { useState, useEffect } from "react";
import EventModel from "./EventModel";

const useUserEvents = () => {
  const [userAddedEvents, setUserAddedEvents] = useState<EventModel[]>(() => {
    const savedEvents = localStorage.getItem("userAddedEvents");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  useEffect(() => {
    localStorage.setItem("userAddedEvents", JSON.stringify(userAddedEvents));
  }, [userAddedEvents]);

  const addUserEvent = (event: EventModel) => {
    setUserAddedEvents((prevEvents) => [...prevEvents, event]);
  };

  const deleteEvent = (event: EventModel) => {
    setUserAddedEvents((prevEvents) =>
      prevEvents.filter((prevEvent) => prevEvent !== event)
    );
  };

  return { userAddedEvents, addUserEvent, deleteEvent };
};

export { useUserEvents };
