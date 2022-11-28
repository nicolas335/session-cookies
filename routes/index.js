var express = require('express');
var router = express.Router();
const formValidation = require('../validations/formValidation')

const {index, color, logout, destroy} = require('../controller/indexController')


router
.get('/', index)
.post('/', formValidation, color)
.get('/logout', logout)
.get('/destroy', destroy)

module.exports = router;
