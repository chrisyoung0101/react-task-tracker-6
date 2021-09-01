import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dog Walk',
      day: 'Feb 5th at 2pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Pizza',
      day: 'Jan 5th at 12pm',
      reminder: false,
    },
    {
      id: 3,
      text: 'Tape Gun',
      day: 'Oct 10th at 6pm',
      reminder: true,
    },
    {
      id: 4,
      text: 'Book Return',
      day: 'June 16th at 4pm',
      reminder: false,
    },
    {
      id: 5,
      text: 'Rainbow',
      day: 'Aug 11th at 10am',
      reminder: true,
    },
    {
      id: 6,
      text: 'Tennis',
      day: 'Mar 7th at 2pm',
      reminder: true,
    },
  ]);

  const toggleReminder = (id) => {
    //console.log(id);

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const deleteTask = (id) => {
    // console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
