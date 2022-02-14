const { Router } = require('express')
const router = new Router()

const register = require('./register/register')
const admin = require('./admin/admin')
const login = require('./login/login')
const token = require('./token/token')

router
    .post('/register/addnewuser', register.addUser)
    .post('/register/addnewcategory', register.addCategory)
    .post('/register/addnewtask', register.addTask)
    .post('/login', login.getUser)
    .post('/tokenchecker',token.tokenchecker)

    .post('/admin/getusers', admin.getUsers)

module.exports = router