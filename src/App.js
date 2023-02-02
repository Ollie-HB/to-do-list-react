import './App.css';
import { useState } from 'react';
import TaskForm from "./components/TaskForm"
import Task from "./components/Task"

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(name) {
    setTasks(prev => {
      return [...prev, {name:name,done:false}];
    })
  }

  return (
    <main>
      <TaskForm onAdd={addTask}/>
      
      {tasks.map(task => (
      <Task />
      ))}
    </main>
  );
}

export default App;
