const {Router} = require('express')
const router = Router()
const userController = require('../controllers/userController')

router.get('/', async (req, res)=>{
    res.json(await userController.getAllUsers()) 
})

router.get('/:id', async (req, res)=>{  
    res.json(await userController.getOne(req.params.id))
})

router.post('/', async (req, res)=>{
    res.json(await userController.create(req.body))
})

router.put('/:id', async (req, res)=>{
    res.json(await userController.update(req.params.id, req.body))
})

router.delete('/:id', async (req, res)=>{  
    res.json(await userController.delete(req.params.id))
})


module.exports = router