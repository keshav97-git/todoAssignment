import React from "react";

function TaskList({ tasks, onDelete }) {
  function deleteTask(index) {}
  return (
    <ul style={{ listStyle: "none", marginRight: 100 }}>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}{" "}
          <span>
            <button onClick={() => onDelete(index)} style={{ marginLeft: 70 }}>
              Del
            </button>
          </span>
        </li> // Ideally, use a unique identifier instead of index
      ))}
    </ul>
  );
}

export default TaskList;
