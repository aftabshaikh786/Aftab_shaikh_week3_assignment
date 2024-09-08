import React from 'react';
import ActivityCard from './ActivityCard';

function Dashboard({ activities }) {
  return (
    <div>
      <h2>Daily Activities </h2>
      {activities.length === 0 ? (
        <p>No activities logged yet.</p>
      ) : (
        activities.map((activity, index) => (
          <ActivityCard key={index} activity={activity} />
        ))
      )}
    </div>
  );
}

export default Dashboard;
