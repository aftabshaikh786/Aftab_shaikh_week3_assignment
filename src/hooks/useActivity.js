import { useState, useEffect } from 'react';

const useActivity = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Retrieve data from local storage on initial render
    const savedActivities = JSON.parse(localStorage.getItem('activities')) || [];
    setActivities(savedActivities);
  }, []);

  const addActivity = (activity) => {
    const updatedActivities = [...activities, activity];
    setActivities(updatedActivities);
    localStorage.setItem('activities', JSON.stringify(updatedActivities));
  };

  return { activities, addActivity };
};

export default useActivity;
