const {Router} = require('express')
const router = Router()
const travelController = require('../controllers/travelController')

router.get('/', travelController.getAllTravels)
router.get('/:id', travelController.getOne)
router.post('/', travelController.create)
router.put('/:id', travelController.update)
router.delete('/:id', travelController.delete)

module.exports = router