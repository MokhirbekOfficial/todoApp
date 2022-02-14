const {getUser} = require('./model')
const secret_key = 'TODOAPP'
const jwt = require('jsonwebtoken')

module.exports = {
    getUser: async(req, res) => {
        try {
            let {user_name,user_password} = req.body
            let user = await getUser(user_name,user_password)
            let user_id = user.user_id
            const token = jwt.sign({user_id}, secret_key)
            let obj = {
                token: token,
                is_admin: user.is_admin
            }
            res.status(201).send(obj)
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    }
}