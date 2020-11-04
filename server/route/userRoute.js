const Router = require("express").Router()
const User = require("../controller/UserController")

Router.post("/register", async (req, res) => {
    try {
        let response = await User.register(req.body)
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send({
            message: "Failed to register user",
            data: error.message
        })
    }
})

Router.post("/login", async (req, res) => {
    try {
        let response = await User.login(req.body)
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send({
            message: "Failed to register user",
            data: error.message
        })
    }
})

module.exports = Router