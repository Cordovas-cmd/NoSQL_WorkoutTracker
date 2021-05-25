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
    validateInputs();
}

//validate user inputs, verify it's available from selection.
function validateInputs() {
  let isValid = true;

  if (workoutType === "resistance") {
    if (nameInput.value.trim() === "") {
      isValid = false;
    }

    if (weightInput.value.trim() === "") {
      isValid = false;
    }

    if (setsInput.value.trim() === "") {
      isValid = false;
    }

    if (repsInput.value.trim() === "") {
      isValid = false;
    }

    if (resistanceDurationInput.value.trim() === "") {
      isValid = false;
    }
  } else if (workoutType === "cardio") {
    if (cardioNameInput.value.trim() === "") {
      isValid = false;
    }

    if (durationInput.value.trim() === "") {
      isValid = false;
    }

    if (distanceInput.value.trim() === "") {
      isValid = false;
    }
  }

  // if it's valid allow / enable
  if (isValid) {
    completeButton.removeAttribute("disabled");
    addButton.removeAttribute("disabled");
    //if invalid don't allow to complete or add
  } else {
    completeButton.setAttribute("disabled", true);
    addButton.setAttribute("disabled", true);
  }
}