const {getTasks,getCategories,updateTasks, deleteTask} = require('./model')
const secret_key = 'TODOAPP'
const jwt = require('jsonwebtoken')

module.exports = {
    getTasks: async(req, res) => {
        try {
            let {token} = req.body
            const decoded = jwt.verify(token, secret_key)
            let task_owner = decoded.user_id
            let userTasks =await getTasks(task_owner)
            res.status(200).send(userTasks)
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    getCategories: async(req, res) => {
        try {
            let allCategories = await getCategories()
            res.status(200).send(allCategories)
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    updateTasks: async(req, res) => {
        try {
            let {task_description,task_status,task_category,task_owner,task_id} = req.body
            let updated = await updateTasks(task_description,task_status,task_category,task_owner,task_id)
            res.status(200).send(updated)
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    deleteTask: async(req, res) => {
        try {
            let {task_id} = req.body
            await deleteTask(task_id)
            res.status(200).send("Successfully Deleted")
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    }
}