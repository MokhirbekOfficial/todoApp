const { fetch, fetchAll } = require('../../lib/postgress')

const TokenChecker = `
SELECT 
    *
FROM
    users
WHERE 
    user_id = $1
`
const tokenchecker = (user_id) => fetch(TokenChecker, user_id)

module.exports = {
    tokenchecker
}