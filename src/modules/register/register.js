const {addUser, addCategory, addTask} = require('./model')
const secret_key = 'TODOAPP'
const jwt = require('jsonwebtoken')

module.exports = {
    addUser: async(req, res) => {
        try {
            let {user_name,user_password,user_email} = req.body
            let newUser = await addUser(user_name,user_password,user_email)
            let user_id = newUser.user_id
            const token = jwt.sign({user_id}, secret_key)
            res.status(201).send(token)
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    addCategory: async(req, res) => {
        try {
            let {category_name} = req.body
            let newCategory = await addCategory(category_name)
            res.status(201).send(newCategory)
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    addTask: async(req, res) => {
        try {
            let {task_description,task_status,task_category} = req.body
            let newTask = await addTask(task_description,task_status,task_category)
            res.status(201).send(newTask)
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    }
}