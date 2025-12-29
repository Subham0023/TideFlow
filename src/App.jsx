import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist";
import Progresstracker from "./Components/Progresstracker";

function App() {
  return (
    <div>
      <h1>Tide Flow</h1>
      <p>Smooth, effortless flow of completing to-dos</p>
      <Taskform />
      <Tasklist />
      <Progresstracker />
      <button>Clear all Tasks</button>
    </div>
  );
}

export default App;
