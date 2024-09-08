import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import ActivityForm from './components/ActivityForm';
import './App.css';

function App() {
  const [activities, setActivities] = useState([]);

  const addActivity = (newActivity) => {
    setActivities([...activities, newActivity]);
  };

  return (
    <div className="App">
      <h1>Fitness Challenge Tracker</h1>
      <ActivityForm addActivity={addActivity} />
      <Dashboard activities={activities} />
    </div>
  );
}

export default App;
