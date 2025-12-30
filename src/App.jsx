import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist";
import Progresstracker from "./Components/Progresstracker";
import { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    const newTask = [...tasks];
    newTask[index] = updatedTask;
    setTasks(newTask);
  };
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  };

  return (
    <div>
      <h1>Tide Flow</h1>
      <p>Smooth, effortless flow of completing to-dos</p>
      <Taskform addTask={addTask} />
      <Tasklist tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <Progresstracker tasks={tasks} />
      <button>Clear all Tasks</button>
    </div>
  );
}
