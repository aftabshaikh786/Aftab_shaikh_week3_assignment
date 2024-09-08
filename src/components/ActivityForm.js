import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

function ActivityForm({ addActivity }) {
  const [steps, setSteps] = useState('');
  const [calories, setCalories] = useState('');
  const [workoutTime, setWorkoutTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivity = {
      steps,
      calories,
      workoutTime,
      date: new Date().toLocaleDateString(),
    };
    addActivity(newActivity);
    setSteps('');
    setCalories('');
    setWorkoutTime('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Steps Taken"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Calories Burned"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Workout Time (minutes)"
        value={workoutTime}
        onChange={(e) => setWorkoutTime(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Log Activity
      </Button>
    </Box>
  );
}

export default ActivityForm;
