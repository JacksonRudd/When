import { useReducer } from "react";
import "./Sidepanel.css";
import eventReducer from "./models/reducer";
import initialStoryState from "./models/intial_state";
import EventModel from "./models/EventModel";

function add_icon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="#A9A9A9" strokeWidth="2" />
      <line x1="12" y1="7" x2="12" y2="17" stroke="#A9A9A9" strokeWidth="2" />
      <line x1="7" y1="12" x2="17" y2="12" stroke="#A9A9A9" strokeWidth="2" />
    </svg>
  );
}

function menu_icon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="3" y1="12" x2="21" y2="12" stroke="#A9A9A9" strokeWidth="2" />
      <line x1="3" y1="6" x2="21" y2="6" stroke="#A9A9A9" strokeWidth="2" />
      <line x1="3" y1="18" x2="21" y2="18" stroke="#A9A9A9" strokeWidth="2" />
    </svg>
  );
}

interface SidePanelProps {
  dispatch: React.Dispatch<any>;
}

function SidePandel({ dispatch }: SidePanelProps) {
  //   has a button for adding an event

  const handelAddEvent = () => {
    console.log("add event");
    const payload: EventModel = {
      id: "1",
      name: "test",
      date: new Date("1915"),
      location: "test",
      description: "test",
    };
    dispatch({ type: "ADD_EVENT", payload: payload });
  };

  return (
    <div className="sidepanel">
      <div className="options">
        <button onClick={handelAddEvent}>{add_icon()}</button>
        <button>{menu_icon()}</button>
      </div>
    </div>
  );
}

export default SidePandel;
