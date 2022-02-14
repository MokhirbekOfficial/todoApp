const { fetch, fetchAll } = require('../../lib/postgress')

const AddUser = `
INSERT INTO users
    (user_name,user_password,user_email)
VALUES 
    ($1,$2,$3)
RETURNING *
`

const AddCategory = `
INSERT INTO categories
    (category_name)
VALUES 
    ($1)
RETURNING *
`
const AddTask = `
INSERT INTO tasks
    (task_description,task_status,task_category,task_owner)
VALUES 
    ($1,$2,$3,$4)
RETURNING *
`


const addUser = (user_name,user_password,user_email) => fetch(AddUser,user_name,user_password,user_email)
const addCategory = (category_name) => fetch(AddCategory,category_name)
const addTask = (task_description,task_status,task_category,task_owner) => fetch(AddTask,task_description,task_status,task_category,task_owner)


module.exports = {
    addUser,
    addCategory,
    addTask
}