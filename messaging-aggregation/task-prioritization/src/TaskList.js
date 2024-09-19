import React, { useState } from 'react';
import './App.css'; // Importing the updated CSS file

function App() {
  const [tasks, setTasks] = useState([
    { name: 'Complete project assignment', priority: 'high' },
    { name: 'Schedule meeting', priority: 'medium' },
    { name: 'Buy groceries', priority: 'low' },
  ]);

  const [newTask, setNewTask] = useState('');
  const [newPriority, setNewPriority] = useState('low');

  const addTask = () => {
    setTasks([...tasks, { name: newTask, priority: newPriority }]);
    setNewTask('');
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task.name !== taskToDelete));
  };

  return (
    <div className="App">
      <h1>Task Prioritization Efficiency</h1>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={`task ${task.priority}`}>
            {task.name} - Priority: {task.priority}
            <button onClick={() => deleteTask(task.name)}>Delete</button>
          </li>
        ))}
      </ul>

      <h3>Add New Task</h3>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task"
      />
      <select value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={addTask}>Add Task</button>

      <h2>Meme Voting</h2>
      <input type="text" placeholder="Enter meme name" />
      <button>Submit Vote</button>
    </div>
  );
}

export default App;


