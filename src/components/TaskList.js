import React from "react";
import Task from "./Task";

export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
  const event = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div className="list-items">loading</div>;
  }
  if (task.lenght === 0) {
    return <div className="list-items">empty</div>;
  }
  return (
    <div className="list-items">
      {tasks.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}