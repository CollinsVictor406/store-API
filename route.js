const express = require('express');
const route = express.Router()

const { createInfo,getAllUsers,deleteInfo } = require('./controller/vendor')

route.post('/create-info',createInfo)
route.get('/get-users',getAllUsers)
route.delete('/delete-users/:id',deleteInfo)

module.exports = route