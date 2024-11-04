import { useReducer } from "react";
import "./App.css";
import Sidepanel from "./Sidepanel";
import Timeline from "./Timeline";
import eventReducer from "./models/reducer";
import initialStoryState from "./models/intial_state";

function App() {
  const [storyState, dispatch] = useReducer(eventReducer, initialStoryState);

  return (
    <>
      <Sidepanel dispatch={dispatch}></Sidepanel>
      <Timeline storyState={storyState}></Timeline>
    </>
  );
}

export default App;
