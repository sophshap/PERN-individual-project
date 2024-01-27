const express = require('express')
const JWT = require('jsonwebtoken')
const router = express.Router()
const { createUser, loginUser } = require("../db/sqlHelperFunctions/users")

// post create user
// endpoint /users
// public route

router.post("/", async (req, res) => {
    console.log("CREATE USER")
    try {
        const user = await createUser(req.body)
        console.log("user", user.rows[0])
        const token = JWT.sign({ id: user.rows[0].user_id }, "secret")
        res.status(200).json({ user: user.rows[0], token })
    } catch (error) {
        console.error("create user route error", error)
        res.status(500).send("Something went wrong.")
    }
})

// post login user
// endpoint /users/login
// public route

router.post("/login", async (req, res) => {
    try {
        const user = await loginUser(req.body)
        if (!user) {
            res.status(400).json({ error: "Invalid Credentials" })
            return
        }
        const token = JWT.sign({ id: user.user_id }, "secret")
        res.status(200).json({ user, token })
    } catch (error) {
        console.error("login user route", error)
        res.status(500).send("Something went wrong.")
    }
})

module.exports = router