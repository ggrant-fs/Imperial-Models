const express = require('express');
const modelsController = require('./../controllers/modelsController');
const router = express.Router();


//routes for models contorllers
router.get('/',modelsController.getAllModels);
router.get('/:id',modelsController.getModel);
router.get('/male-models',modelsController.getAllMaleModels);
router.get('/female-models',modelsController.getAllFemaleModels);


module.exports = router;