const express  = require('express')
const {PrismaClient}  = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/',(req, res)=>{
    res.send("Minnatdorman!")
})

app.post('/posts', async(req, res)=>{
    const {title, content} = req.body
    const result = await prisma.post.create({
        data:{
            title, content
        }
    })
    res.json(result)
})

app.get('/posts', async(req, res)=>{
    const result = await prisma.post.findMany()
    res.json(result)
})

app.get('/posts/:id', async(req, res)=>{
    const {id} = req.params
    const result = await prisma.post.findFirst({
        where: {id:Number(id)},
    })
    res.json(result)
})

app.put('/posts/:id', async(req, res)=>{
    const {id} = req.params
    const {title, content} = req.body
    const post = await prisma.post.update({
        where: {id:Number(id)},
        data: {title, content}
    })
    res.json(post)

})

app.delete('/posts/:id', async(req, res)=>{
    const {id} = req.params
    const post = await prisma.post.delete({
        where: {id:Number(id)},
    })
    res.json("Deleted")

})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})
