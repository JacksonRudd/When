import { useReducer, useState } from "react";
import "./App.css";
import Sidepanel from "./Sidepanel";
import Timeline from "./Timeline";
import eventReducer from "./models/reducer";
import initialStoryState from "./models/intial_state";
import UserAddedEvents from "./UserAddedEvents";
import { useUserEvents } from "./models/userEvents";

function App() {
  const [storyState, dispatch] = useReducer(eventReducer, initialStoryState);
  const [showUserAddedEvents, setShowUserAddedEvents] = useState(false);
  const { userAddedEvents, addUserEvent, deleteEvent } = useUserEvents();

  function toggleUserAddedEvents() {
    setShowUserAddedEvents(!showUserAddedEvents);
    console.log("toggleUserAddedEvents");
  }

  return (
    <>
      <Sidepanel
        dispatch={dispatch}
        setShowUserEvents={toggleUserAddedEvents}
      />
      {!showUserAddedEvents && (
        <Timeline storyState={storyState} dispatch={dispatch} />
      )}
      {showUserAddedEvents && (
        <UserAddedEvents
          userAddedEvents={userAddedEvents}
          addUserEvent={addUserEvent}
          deleteEvent={deleteEvent}
        />
      )}
    </>
  );
}

export default App;
