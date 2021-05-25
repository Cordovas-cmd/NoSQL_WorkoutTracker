const workoutTypeSelect = document.querySelector("#type");
const cardioForm = document.querySelector(".cardio-form");
const resistanceForm = document.querySelector(".resistance-form");
const cardioNameInput = document.querySelector("#cardio-name");
const nameInput = document.querySelector("#name");
const weightInput = document.querySelector("#weight");
const setsInput = document.querySelector("#sets");
const repsInput = document.querySelector("#reps");
const durationInput = document.querySelector("#duration");
const resistanceDurationInput = document.querySelector("#resistance-duration");
const distanceInput = document.querySelector("#distance");
const completeButton = document.querySelector("button.complete");
const addButton = document.querySelector("button.add-another");
const toast = document.querySelector("#toast");
const newWorkout = document.querySelector(".new-workout")

let workoutType = null;
let shouldNavigateAway = false;

// adds functionality to entry points in workout.
async function initExercise() {
  let workout;

  if (location.search.split("=")[1] === undefined) {
    workout = await API.createWorkout()
    console.log(workout)
  }
  if (workout) {
    location.search = "?id=" + workout._id;
  }

}
//callback to original function above.
initExercise();

// function for changing workout type with eventhandler.
function handleWorkoutTypeChange(event) {
    workoutType = event.target.value;
  
    if (workoutType === "cardio") {
      cardioForm.classList.remove("d-none");
      resistanceForm.classList.add("d-none");
    } else if (workoutType === "resistance") {
      resistanceForm.classList.remove("d-none");
      cardioForm.classList.add("d-none");
    } else {
      cardioForm.classList.add("d-none");
      resistanceForm.classList.add("d-none");
    }
  