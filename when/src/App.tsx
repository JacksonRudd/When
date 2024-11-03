import "./App.css";
import NavBar from "./NavBar";
import Sidepanel from "./Sidepanel";
import Timeline from "./Timeline";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <h1>Timeline</h1>

      <main className="content">
        <Sidepanel></Sidepanel>
        <Timeline></Timeline>
      </main>
    </>
  );
}

export default App;
