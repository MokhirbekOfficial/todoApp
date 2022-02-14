const { fetch, fetchAll } = require('../../lib/postgress')

const GetUser = `
SELECT
    *
FROM 
    users
WHERE
    user_name = $1 and user_password = $2
`


const getUser = (user_name, user_password) => fetch(GetUser,user_name,user_password)


module.exports = {
    getUser
}