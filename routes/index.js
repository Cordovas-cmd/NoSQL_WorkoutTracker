// Dependencies
const router = require('express').Router();

// ties both api and homeRoutes.js together for later ref
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');

// Routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// Export
module.exports = router;
