const {users} = require('../models')
const tokenService = require('../services/tokenService')

const verifyToken = async (req, res, next) => {
    const token = req.headers["authorization"]
    
    if (!token) return res.status(400).json({error: "No token provided"})
    try {
        const decodedJWT = tokenService.decodeToken(token)
        const user = await users.findOne({where: {id: decodedJWT.userId}})
        if (!user) return res.status(401).json({error: "Invalid User"})
        req.user = user
        next()
    } catch (error) {
        res.status(401).json({error: "Unathorized"})
    }
}

module.exports = verifyToken