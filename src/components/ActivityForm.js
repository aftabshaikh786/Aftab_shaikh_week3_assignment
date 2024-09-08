import React, { useState } from 'react';
import { TextField, Button, Box, Container } from '@mui/material';

const ActivityForm = ({ addActivity }) => {
  const [steps, setSteps] = useState('');
  const [calories, setCalories] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addActivity({ steps, calories, time });
    setSteps('');
    setCalories('');
    setTime('');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        sx={{ mt: 3, p: 3, backgroundColor: '#fff', borderRadius: 2, boxShadow: 3 }}
      >
        <TextField
          label="Steps Taken"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Calories Burned"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Workout Time (minutes)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth
          sx={{ mt: 2 }}
        >
          Log Activity
        </Button>
      </Box>
    </Container>
  );
};

export default ActivityForm;
