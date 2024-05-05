import React, { useState } from "react";

function TaskInput({ addTask }) {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTask = () => {
    addTask(inputText);
    setInputText(""); // Clear the input after adding
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask} style={{ marginLeft: 10 }}>
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;
