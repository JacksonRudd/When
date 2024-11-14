import { useState, useEffect } from "react";
import EventModel from "./EventModel";

const useUserEvents = () => {
  const [userAddedEvents, setUserAddedEvents] = useState<EventModel[]>(() => {
    const savedEvents = localStorage.getItem("userAddedEvents");
    return savedEvents
      ? JSON.parse(savedEvents).map((event: EventModel) => ({
          ...event,
          date: new Date(event.date), // Convert date strings back to Date objects
        }))
      : [];
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

  const searchUserEvents = (searchText: string) => {
    return userAddedEvents.filter((event) =>
      event.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  return { userAddedEvents, addUserEvent, deleteEvent, searchUserEvents };
};

export { useUserEvents };
