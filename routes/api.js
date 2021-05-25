// Dependencies
// Pull in what is needed to route correctly.
// =============================================================
const router = require("express").Router();
const { Workout } = require("../models");

// API routes
// =============================================================
// Get the last workout
router.get("/workouts", (req, res) => {
    Workout.find({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// Get ALL workouts
router.get("/workouts/range", (req, res) => {
    Workout.find({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// Create new workout (post)
router.post("/workouts", (req, res) => {
    Workout.create(req.body)
        .then((newWorkout) => {
            res.json(newWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// Uses a put to Update workout
router.put("/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: req.body } },
        { new: true }
    )
        .then((editWorkout) => {
            res.json(editWorkout)
        })
        .catch((err) => {
            res.status(400).json(err);
        })
});

// Exports

module.exports = router;