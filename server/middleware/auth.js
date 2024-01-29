const JWT = require("jsonwebtoken")
const { getUserByID } = require("../db/sqlHelperFunctions/users")

async function authorize(req, res, next) {
    try {
        const token = req.headers?.authorization?.split(" ")[1]
        if (!token) {
            req.user = null
        } else {
            const decodedJWT = JWT.verify(token, "secret")
            req.user = await getUserByID(decodedJWT.user_id)
        }
        next()
    } catch (error) {
        res.status(500).send("Something went wrong with authorization")
    }
}