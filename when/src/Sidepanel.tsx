import "./Sidepanel.css";

function add_icon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="#A9A9A9" stroke-width="2" />
      <line
        x1="12"
        y1="7"
        x2="12"
        y2="17"
        stroke="#A9A9A9"
        stroke-width="2"
        stroke-linecap="round"
      />
      <line
        x1="7"
        y1="12"
        x2="17"
        y2="12"
        stroke="#A9A9A9"
        stroke-width="2"
        stroke-linecap="round"
      />
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
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        stroke="#A9A9A9"
        stroke-width="2"
        stroke-linecap="round"
      />
      <line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
        stroke="#A9A9A9"
        stroke-width="2"
        stroke-linecap="round"
      />
      <line
        x1="3"
        y1="18"
        x2="21"
        y2="18"
        stroke="#A9A9A9"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}

function SidePandel() {
  //   has a button for adding an event

  return (
    <div className="sidepanel">
      <div className="options">
        <button>{add_icon()}</button>
        <button>{menu_icon()}</button>
      </div>
    </div>
  );
}

export default SidePandel;
