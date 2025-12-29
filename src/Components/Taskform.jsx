import React from "react";

export default function Taskform() {
  return (
    <form action="">
      <div>
        {/* // ? Why div here - it is for styling purpose */}
        <input type="text" placeholder="Enter the Task" />
        <button type="submit">Add Task</button>
      </div>
      <div>
        <select>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <select>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="general">General</option>
        </select>
      </div>
    </form>
  );
}
