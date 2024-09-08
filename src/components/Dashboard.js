import React from 'react';
import ActivityCard from './ActivityCard';
import { Grid } from '@mui/material';

const Dashboard = ({ activities }) => {
  return (
    <Grid container spacing={3}>
      {activities.map((activity, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ActivityCard activity={activity} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;
