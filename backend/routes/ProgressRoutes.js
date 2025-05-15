const express = require('express');
const router = express.Router();
const progressController = require('../controller/ProgressController');

router.post('/create', progressController.createProgress);
router.get('/:userId/:courseId', progressController.getProgress);
router.put('/update-completion', progressController.updateDayCompletion);

module.exports = router;