const {Router} = require('express')
const router = Router()
const userController = require('../controllers/userController.js')
const TokenGenerate = require('../services/tokenGenerate')
const auth = require('../middleware/auth')

router.post('/token',TokenGenerate.token)
router.get('/', auth, userController.getAllUsers)
router.get('/:id', auth, userController.getOne)
router.post('/', auth, userController.create)
router.put('/:id', auth, userController.update)
router.delete('/:id', auth, userController.delete)

module.exports = router