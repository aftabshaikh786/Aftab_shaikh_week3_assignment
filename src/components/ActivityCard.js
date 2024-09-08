import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function ActivityCard({ activity }) {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h5">Date: {activity.date}</Typography>
        <Typography>Steps: {activity.steps}</Typography>
        <Typography>Calories: {activity.calories}</Typography>
        <Typography>Workout Time: {activity.workoutTime} mins</Typography>
      </CardContent>
    </Card>
  );
}

export default ActivityCard;
