const { Router } = require('express')
const router = new Router()

const register = require('./register/register')
const admin = require('./admin/admin')

router
    .post('/register/addnewuser', register.addUser)
    .post('/register/addnewcategory', register.addCategory)
    .post('/register/addnewtask', register.addTask)

    .post('/admin/getusers', admin.getUsers)

module.exports = router