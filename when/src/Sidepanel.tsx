import { useEffect, useState } from "react";
import "./Sidepanel.css";
import Search from "./Search";
import EventModel from "./models/EventModel";
import { eventModelToEventModelView } from "./views/EventView";
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

function magnifying_glass_icon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="8" stroke="#A9A9A9" strokeWidth="2" />
      <line x1="16" y1="16" x2="21" y2="21" stroke="#A9A9A9" strokeWidth="2" />
    </svg>
  );
}

interface SidePanelProps {
  dispatch: React.Dispatch<any>;
  setShowUserEvents: () => void;
  searchUserEvents: (searchText: string) => EventModel[];
}

function SidePanel({
  dispatch,
  setShowUserEvents,
  searchUserEvents,
}: SidePanelProps) {
  const [showForm, setShowForm] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  // function to set --sidepanel-width to 300px
  const setWidth = (pixels: number) => {
    document.documentElement.style.setProperty(
      "--sidepanel-width",
      `${pixels}px`
    );
  };

  useEffect(() => {
    if (showSearch) {
      setWidth(300);
    } else {
      setWidth(100);
    }
  }, [showSearch]);

  const handleShowEvent = () => {
    setShowForm(!showForm);
    setShowSearch(false);
    setShowUserEvents();
  };

  const handleSearchEvent = () => {
    setShowSearch(!showSearch);
    setShowForm(false);
  };

  const onSubmit = (eventModel: EventModel) => {
    dispatch({
      type: "ADD_EVENT",
      payload: eventModelToEventModelView(eventModel),
    });
    setShowForm(false);
    setShowSearch(false);
  };
  return (
    <div className="sidepanel">
      <div className="options">
        <button onClick={handleShowEvent}>{add_icon()}</button>
        {!showForm && (
          <button onClick={handleSearchEvent}>{magnifying_glass_icon()}</button>
        )}
        {showSearch && (
          <Search
            onClick={onSubmit}
            searchUserEvents={searchUserEvents}
          ></Search>
        )}
      </div>
    </div>
  );
}

export default SidePanel;
