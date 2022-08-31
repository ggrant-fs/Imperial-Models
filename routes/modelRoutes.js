const express = require('express');
const modelsController = require('./../controllers/modelsController');
const router = express.Router();


//routes for models contorllers
router.route('/').get(modelsController.getAllModels);
router.route('/male-model').get(modelsController.getAllMaleModels);
router.route('/female-model').get(modelsController.getAllFemaleModels);

router.route('/:id').get(modelsController.getModel);


module.exports = router;