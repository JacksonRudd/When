import { useState } from "react";
import EventForm from "./EventForm";
import "./Sidepanel.css";
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

function SidePanel({ dispatch }: SidePanelProps) {
  const [showForm, setShowForm] = useState(false);

  const handelShowEvent = () => {
    setShowForm(!showForm);
  };

  const onSubmit = (eventModel: EventModel) => {
    console.log(eventModel);
    dispatch({ type: "ADD_EVENT", payload: eventModel });
    setShowForm(false);
  };

  return (
    <div className="sidepanel">
      <div className="options">
        <button onClick={handelShowEvent}>{add_icon()}</button>
        <button>{menu_icon()}</button>
        {showForm && <EventForm onSubmit={onSubmit}></EventForm>}
      </div>
    </div>
  );
}

export default SidePanel;
