const express = require('express');
const router = express.Router();

const categoryController = require('../Controllers/categoryController');

router.get('/', categoryController.findAll);
router.get('/:id', categoryController.findById);
router.post('/', categoryController.create);
router.delete('/:id', categoryController.delete);
module.exports = router;