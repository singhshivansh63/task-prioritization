import React from 'react';
import TaskList from './TaskList'; // Import your TaskList component
import MemeVoting from './MemeVoting'; // Import your MemeVoting component
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Prioritization Efficiency</h1>
      </header>
      <main>
        <TaskList />
        <MemeVoting />
      </main>
    </div>
  );
}

export default App;


