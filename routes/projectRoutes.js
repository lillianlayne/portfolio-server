const express = require('express');
const router = express.Router();

const ProjectCtrl = require('../controllers/projectController')


router.post('/', ProjectCtrl.create)
router.get('/', ProjectCtrl.showAll)
router.get('/:id', ProjectCtrl.show)
router.put('/:id', ProjectCtrl.update)
router.delete('/:id', ProjectCtrl.delete)

module.exports = router