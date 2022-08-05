const { Router } = require('express')
const conselhoController = require('./app/controller/ConselhoController')

const router = Router()

router.get('/coselho', conselhoController.get)

module.exports = router
