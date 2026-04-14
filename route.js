const express = require('express');
const route = express.Router()

const { createInfo,getAllUsers } = require('./controller/vendor')

route.post('/create-info',createInfo)
route.get('/get-users',getAllUsers)

module.exports = route