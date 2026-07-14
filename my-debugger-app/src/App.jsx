import React, { useState } from 'react';

function TaskLab() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn Breakpoints", completed: false },
    { id: 2, text: "Master Step-Into", completed: true }
  ]);
  const [input, setInput] = useState("");

  // 1. Logic for adding a task
  const addTask = () => {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false
    };

    // BREAKPOINT HERE: 
    // Check if 'newTask' looks correct before adding to the array
    setTasks([...tasks, newTask]);
    setInput("");
  };

  // 2. Logic for toggling status (Great for 'Scope' inspection)
  const toggleTask = (id) => {
    // BREAKPOINT HERE: 
    // Step through the .map to see which 't' matches the 'id'
    const updatedTasks = tasks.map(t => {
      if (t.id === id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Advanced Debugger Lab</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="New task..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li 
            key={task.id}
            onClick={() => toggleTask(task.id)}
            style={{ 
              cursor: 'pointer',
              textDecoration: task.completed ? 'line-through' : 'none',
              padding: '8px',
              borderBottom: '1px solid #ddd'
            }}
          >
            {task.text}
          </li>
        ))}
      </ul>
      
      <p><small>Total Tasks: {tasks.length}</small></p>
    </div>
  );
}

export default TaskLab;