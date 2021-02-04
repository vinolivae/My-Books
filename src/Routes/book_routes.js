const express = require('express');
const router = express.Router();

const bookController = require('../Controllers/bookController');

router.get('/', bookController.findAll);
router.post('/', bookController.create);
router.get('/:id', bookController.findOne);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.delete);

module.exports = router;
