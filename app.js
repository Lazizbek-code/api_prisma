const express  = require('express')
const users = require('./routers/users')
const travels = require('./routers/travels')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/users', users),
app.use('/api/travels', travels)

app.listen(5000, ()=>{
    console.log('Server is running on port 5000')
})