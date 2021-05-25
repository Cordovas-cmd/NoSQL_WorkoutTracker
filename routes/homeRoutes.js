// Dependencies
const router = require("express").Router();
const path = require('path');

// HTML routes
// Home page/ Main page
router.get("/", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    } catch (err) {
        res.status(500).end();
    }
});
// Exercise page
router.get("/exercise", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    } catch (err) {
        res.status(500).end();
    }
});
// Stats page
router.get("/stats", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    } catch (err) {
        res.status(500).end();
    }
});

// Exports
module.exports = router;