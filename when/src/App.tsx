import "./App.css";
import NavBar from "./NavBar";
import Sidepanel from "./Sidepanel";
import Timeline from "./Timeline";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <h1>Timeline</h1>

      <Sidepanel></Sidepanel>
      <Timeline></Timeline>
    </>
  );
}

export default App;
