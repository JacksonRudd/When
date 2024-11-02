import "./App.css";
import NavBar from "./NavBar";
import Timeline from "./Timeline";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="content">
        <Timeline></Timeline>
      </div>
    </>
  );
}

export default App;
