const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();
module.exports = (req, res, next) => { 
  try {
    const auth_header = req.header('Authorization')
    if (!auth_header) return res.status(403).send('Access denied.')
    const token = auth_header.split(' ')[1]
    if (!token) {
      return res.status(403).send('Access denied.')
    }    
    const decoded = jwt.verify(token, process.env.NODE_CLIENT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).send(error.message)
  }
}