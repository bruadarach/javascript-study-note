const { membersController } = require('../controller');
const { findAll, findById, createMember, updateById, deleteById } = membersController;
const express = require('express');
const router = express.Router();

router.get('/', findAll);
router.get('/:id', findById);
router.post('/', createMember);
router.put('/:id', updateById);
router.delete('/:id', deleteById);

module.exports = router;
