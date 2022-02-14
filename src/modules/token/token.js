const { tokenchecker } = require('./model')
const secret_key = 'TODOAPP'
const jwt = require('jsonwebtoken')

module.exports = {
    tokenchecker: async (req, res) => {
        try{
            let {token} = req.body
            const decoded = jwt.verify(token, secret_key)
            let user = await tokenchecker(decoded.user_id)
            res.status(200).send(user.is_admin)
        }catch(e){
            console.log(e.message)
            res.status(405).json(e.message)
        }
    }
}