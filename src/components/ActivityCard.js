import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ActivityCard = ({ activity }) => {
  return (
    <Card sx={{ mb: 2, p: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Steps: {activity.steps}</Typography>
        <Typography variant="body1" color="textSecondary">Calories: {activity.calories}</Typography>
        <Typography variant="body2" color="textSecondary">Workout Time: {activity.time} mins</Typography>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
