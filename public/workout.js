  // code for logging current workout data

async function initWorkout() {
    const lastWorkout = await API.getLastWorkout();
    console.log("Last workout:", lastWorkout);
    if (lastWorkout) {
      document
        .querySelector("a[href='/exercise?']")
        .setAttribute("href", `/exercise?id=${lastWorkout._id}`);
  
        //details on workout
      const workoutSummary = {
        date: formatDate(lastWorkout.day),
        totalDuration: lastWorkout.totalDuration,
        numExercises: lastWorkout.exercises.length,
        ...tallyExercises(lastWorkout.exercises)
      };
// render summary of data based on above input
      renderWorkoutSummary(workoutSummary);
    } else {
      renderNoWorkoutText()
    }
  }
  //tally the data
  function tallyExercises(exercises) {
    const tallied = exercises.reduce((acc, curr) => {
      if (curr.type === "resistance") {
        acc.totalWeight = (acc.totalWeight || 0) + curr.weight;
        acc.totalSets = (acc.totalSets || 0) + curr.sets;
        acc.totalReps = (acc.totalReps || 0) + curr.reps;
      } else if (curr.type === "cardio") {
        acc.totalDistance = (acc.totalDistance || 0) + curr.distance;
      }
      return acc;
    }, {});
    //return updated
    return tallied;
  }

  function formatDate(date) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
  
    return new Date(date).toLocaleDateString(options);
  }
  //tell where to show bupdated data from html selection.
  function renderWorkoutSummary(summary) {
    const container = document.querySelector(".workout-stats");
    
    // object with properties tied to total workout stats.
    const workoutKeyMap = {
        date: "Date",
        totalDuration: "Total Workout Duration",
        numExercises: "Exercises Performed",
        totalWeight: "Total Weight Lifted",
        totalSets: "Total Sets Performed",
        totalReps: "Total Reps Performed",
        totalDistance: "Total Distance Covered"
      };
    // ties the object and summary together.
      Object.keys(summary).forEach(key => {
          // for each 
        const p = document.createElement("p");
        const strong = document.createElement("strong");
    
        strong.textContent = workoutKeyMap[key];
        const textNode = document.createTextNode(`: ${summary[key]}`);
    
        p.appendChild(strong);
        p.appendChild(textNode);
    
        container.appendChild(p);
      });
    }
    
    function renderNoWorkoutText() {
      const container = document.querySelector(".workout-stats");
      const p = document.createElement("p");
      const strong = document.createElement("strong");
      strong.textContent = "You have not created a workout yet!"
    
      p.appendChild(strong);
      container.appendChild(p);
    }
    
    initWorkout();