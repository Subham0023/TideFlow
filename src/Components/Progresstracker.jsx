import React from "react";

export default function Progresstracker({ tasks }) {
  const completedTask = tasks.filter((t) => t.completed).length;
  const totalTask = tasks.length;
  const percentage = totalTask === 0 ? 0 : (completedTask / totalTask) * 100;
  return (
    <div className="progress-tracker">
      <p>
        {completedTask} of {totalTask} tasks completed
      </p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}
