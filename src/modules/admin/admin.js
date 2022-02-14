const {getUsers} = require('./model')
const secret_key = 'TODOAPP'
const jwt = require('jsonwebtoken')

module.exports = {
    getUsers: async(req, res) => {
        try {
            let {token} = req.body
            const decoded = jwt.verify(token, secret_key)
            
            // let Admin = await getAdmin(login,password)
            // if(Admin){
            //     let admin_id = Admin.admin_id
            //     const token = jwt.sign({admin_id}, secret_key)
            //     let obj = {
            //         token: token,
            //         is_super: Admin.is_super
            //     }
            //     return res.status(200).send(obj)
            // }
            // res.status(400).send('Wrong login or password!')
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    }
}