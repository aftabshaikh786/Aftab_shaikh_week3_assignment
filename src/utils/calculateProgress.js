// Example function to calculate total steps, calories, and time
export const calculateProgress = (activities) => {
    const totalSteps = activities.reduce((acc, curr) => acc + Number(curr.steps), 0);
    const totalCalories = activities.reduce((acc, curr) => acc + Number(curr.calories), 0);
    const totalTime = activities.reduce((acc, curr) => acc + Number(curr.time), 0);
  
    return {
      totalSteps,
      totalCalories,
      totalTime,
    };
  };
  