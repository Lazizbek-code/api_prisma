const {Router} = require('express')
const router = Router()
const postController = require('../controllers/postController')

router.get('/', async (req, res)=>{
    res.json(await postController.getAllUsers()) 
})

router.get('/:id', async (req, res)=>{  
    res.json(await postController.getOne(req.params.id))
})

router.post('/', async (req, res)=>{
    res.json(await postController.create(req.body))
})

router.put('/:id', async (req, res)=>{
    res.json(await postController.update(req.params.id, req.body))
})

router.delete('/:id', async (req, res)=>{  
    res.json(await postController.delete(req.params.id))
})


module.exports = router