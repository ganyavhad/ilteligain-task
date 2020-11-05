const md5 = require('md5')
const User = require("../model/User")

let model = {
    register: async function (data) {
        try {

            let userData = await User.findOne({
                where: {
                    email: data.email
                }
            })
            if (userData) {
                return {
                    message: "User already registered",
                    data: {}
                }
            }
            data.password = md5(data.password)
            let savedData = await User.create(data)
            return {
                data: savedData,
                message: "Register successful"
            };

        } catch (error) {
            throw error
        }
    },
    login: async function (data) {
        try {
            let password = md5(data.password)
            let userData = await User.findOne({
                where: {
                    email: data.email
                }
            })
            if (!userData) {
                return {
                    message: "Email not register",
                    data: {}
                }
            }
            if (userData.password !== password) {
                return {
                    message: "Invalid Credential",
                    data: {}
                }
            }
            return {
                data: userData,
                message: "Login successful"
            };
        } catch (error) {
            throw error
        }
    }

}

module.exports = model