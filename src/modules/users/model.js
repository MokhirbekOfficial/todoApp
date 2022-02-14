const { fetch, fetchAll } = require('../../lib/postgress')

const GetTasks = `
SELECT
    *
FROM 
    tasks
WHERE
    task_owner = $1
`
const GetCategories = `
SELECT
    *
FROM 
    categories
`
const UpdateTasks = `
UPDATE 
    tasks
SET 
    task_description = $1,
    task_status = $2,
    task_category = $3,
    task_owner = $4
WHERE 
    task_id = $5
RETURNING 
    *
`
const DeleteTask = `
DELETE
FROM
    tasks
WHERE
    task_id = $1
`


const getTasks = (task_owner) => fetchAll(GetTasks,task_owner)
const getCategories = () => fetchAll(GetCategories)
const updateTasks = (task_description,task_status,task_category,task_owner,task_id) => fetch(UpdateTasks,task_description,task_status,task_category,task_owner,task_id)
const deleteTask = (task_id) => fetch(DeleteTask,task_id)




module.exports = {
    getTasks,
    getCategories,
    updateTasks,
    deleteTask
}