const { fetch, fetchAll } = require('../../lib/postgress')

const GetAdmin = `
SELECT
    *
FROM 
    users
WHERE
    user_id = $1
`

const GetUsers = `
SELECT
    *
FROM 
    users
WHERE
    is_admin = false
`
const GetTasks = `
SELECT
    task_id,
    task_description,
    task_status,
    task_time,
    category_name,
    user_name
FROM 
    tasks
LEFT JOIN users
    ON task_owner = user_id
LEFT JOIN categories
    ON task_category = category_id
ORDER BY task_time
`

const UpdateUsers = `
UPDATE 
    users
SET 
    user_name = $1,
    user_password = $2,
    user_email = $3
WHERE 
    user_id = $4
RETURNING 
    *
`

const UpdateCategory = `
UPDATE 
    categories
SET 
    category_name = $1
WHERE 
    category_id = $2
RETURNING 
    *
`


const getAdmin = (user_id) => fetch(GetAdmin,user_id)
const getUsers = () => fetchAll(GetUsers)
const getTasks = () => fetchAll(GetTasks)
const updateUsers = (user_name,user_password,user_email,user_id) => fetch(UpdateUsers,user_name,user_password,user_email,user_id)
const updateCategory = (category_name,category_id) => fetch(UpdateCategory,category_name,category_id)


module.exports = {
    getAdmin,
    getUsers,
    getTasks,
    updateUsers,
    updateCategory
}