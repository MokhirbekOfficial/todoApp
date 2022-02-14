const { fetch, fetchAll } = require('../../lib/postgress')

const GetAdmin = `
SELECT
    *
FROM 
    blog_admin
WHERE
    admin_name = $1 and admin_password = $2
`

const GetUsers = `
SELECT
    *
FROM 
    users
WHERE
    is_admin = false
`


const getUsers = () => fetchAll(GetUsers)

module.exports = {
    getUsers
}