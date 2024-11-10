import { useState } from "react";
import "./Search.css";
import { get_events_by_substring } from "./providers/EventProvider";
import EventModel from "./models/EventModel";

interface SearchProps {
  onClick: (event: EventModel) => void;
}

function Search({ onClick }: SearchProps) {
  //   add state for search text

  const [searchText, setSearchText] = useState("");

  function get_search_results(searchText: string): EventModel[] {
    if (searchText === "") {
      return [];
    }
    return get_events_by_substring(searchText);
  }

  function handle_click(event: EventModel) {
    onClick(event);
  }

  return (
    <div className="search">
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <ol>
        {get_search_results(searchText).map((event) => (
          <button onClick={() => handle_click(event)} key={event.name}>
            <b>{event.name}</b>
            <p>{event.description}</p>
            <p>{event.location}</p>
          </button>
        ))}
      </ol>
    </div>
  );
}

export default Search;
