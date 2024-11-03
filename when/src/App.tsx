import "./App.css";
import NavBar from "./NavBar";
import Timeline from "./Timeline";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <main className="content">
        <h1>Timeline</h1>

        <Timeline></Timeline>
      </main>
    </>
  );
}

export default App;
