const {Router} = require('express');

const {PollutionController} = require('../controllers/pollutionController')

const pollutionRouter = Router();

pollutionRouter.post('/', PollutionController.createItem);
pollutionRouter.get('/', PollutionController.getItems);

module.exports = {pollutionRouter}
