const { Router } = require('express')
const router = new Router()

const register = require('./register/register')
const admin = require('./admin/admin')
const login = require('./login/login')
const token = require('./token/token')
const users = require('./users/users')

router
    .get('/user/getcategories', users.getCategories)

    .post('/register/addnewuser', register.addUser)
    .post('/register/addnewcategory', register.addCategory)
    .post('/register/addnewtask', register.addTask)
    .post('/login', login.getUser)
    .post('/tokenchecker',token.tokenchecker)
    .post('/admin/getusers', admin.getUsers)
    .post('/admin/gettasks', admin.getTasks)
    .post('/user/gettasks', users.getTasks)

    .put('/admin/updateusers', admin.updateUsers)
    .put('/admin/updatecategory', admin.updateCategory)
    .put('/user/updatetasks', users.updateTasks)

    .delete('/user/deletetask', users.deleteTask)
    .delete('/admin/deleteuser', admin.deleteUser)
    .delete('/admin/deletecategory', admin.deleteCategory)


module.exports = router