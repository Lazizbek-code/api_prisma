const {Router} = require('express')
const router = Router()
const userController = require('../controllers/userController.js')

router.get('/', userController.getAllUsers)
router.get('/:id', userController.getOne)
router.post('/', userController.create)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

module.exports = router