const express  = require('express')
const users = require('./routers/users')

const app = express()
app.use(express.json())

app.use('/api/users', users)

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})
