const {getUsers,getAdmin,getTasks,updateUsers,updateCategory} = require('./model')
const secret_key = 'TODOAPP'
const jwt = require('jsonwebtoken')

module.exports = {
    getUsers: async(req, res) => {
        try {
            let {token} = req.body
            const decoded = jwt.verify(token, secret_key)

            let Admin = await getAdmin(decoded.user_id)
            if(Admin.is_admin){
                let users = await getUsers()
                return res.status(200).send(users)
            }
            res.status(401).send('Unauthorithed')
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    getTasks: async(req, res) => {
        try {
            let {token} = req.body
            const decoded = jwt.verify(token, secret_key)

            let Admin = await getAdmin(decoded.user_id)
            if(Admin.is_admin){
                let tasks = await getTasks()
                return res.status(200).send(tasks)
            }
            res.status(401).send('Unauthorithed')
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    updateUsers: async(req, res) => {
        try {
            let {token,user_name,user_password,user_email,user_id} = req.body
            const decoded = jwt.verify(token, secret_key)

            let Admin = await getAdmin(decoded.user_id)
            if(Admin.is_admin){
                let updated = await updateUsers(user_name,user_password,user_email,user_id)
                return res.status(200).send(updated)
            }
            res.status(401).send('Unauthorithed')
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    updateCategory: async(req, res) => {
        try {
            let {token,category_name,category_id} = req.body
            const decoded = jwt.verify(token, secret_key)

            let Admin = await getAdmin(decoded.user_id)
            if(Admin.is_admin){
                let updated = await updateCategory(category_name,category_id)
                return res.status(200).send(updated)
            }
            res.status(401).send('Unauthorithed')
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    }
}