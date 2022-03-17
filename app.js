const express  = require('express')

const users = require('./routers/users')
const posts = require('./routers/posts')

const app = express()
app.use(express.json())

app.use('/users', users)
app.use('/posts', posts)

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})
