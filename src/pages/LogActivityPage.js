import React from 'react';
import ActivityForm from '../components/ActivityForm';
import useActivity from '../hooks/useActivity';
import { Container, Typography } from '@mui/material';

const LogActivityPage = () => {
  const { addActivity } = useActivity();

  return (
    <Container className="container">
      <Typography variant="h4" gutterBottom>Log New Activity</Typography>
      <ActivityForm addActivity={addActivity} />
    </Container>
  );
};

export default LogActivityPage;
