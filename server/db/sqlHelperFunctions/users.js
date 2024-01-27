const client = require("../client")
const bcrypt = require("bcrypt")

const createUser = async (user) => {
    try {
        const { first_name, last_name, username, password, email, is_admin } = user
        const hash = await bcrypt.hash(password, 8)
        console.log("hash", hash)
        const query = `
INSERT INTO users (first_name, last_name, username, password, email, is_admin) VALUES ($1, $2, $3, $4, $5, $6)
RETURNING user_id, first_name, last_name, username, email, is_admin;`
        const values = [first_name, last_name, username, hash, email, is_admin]
        return client.query(query, values)

    } catch (error) {
        console.error("create user error", error)
    }

}

const loginUser = async (user) => {
    try {
        const { username, password } = user
        const query = `SELECT * FROM users WHERE username = '${username}';`
        const results = await client.query(query)
        const userFromDB = results.rows[0]
        console.log("login user", userFromDB)
        const match = await bcrypt.compare(password, userFromDB.password)
        if (match) {
            delete userFromDB.password
            return userFromDB
        }
        else {
            return null
        }

    } catch (error) {
        console.error("login user error", error)
    }

}

const getUserByID = async (id) => {
    try {
        const data = await client.query(`SELECT * FROM users WHERE user_id = ${id};`)
        return data.rows[0]
    } catch (error) {
        console.error("get user by id error", error)
    }
}

module.exports = { createUser, loginUser, getUserByID }

