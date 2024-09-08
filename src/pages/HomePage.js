import React from 'react';
import Dashboard from '../components/Dashboard';
import useActivity from '../hooks/useActivity';
import { Container, Typography } from '@mui/material';

const HomePage = () => {
  const { activities } = useActivity();

  return (
    <Container className="container">
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Dashboard activities={activities} />
    </Container>
  );
};

export default HomePage;
