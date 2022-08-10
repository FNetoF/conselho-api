const { Router } = require('express')
const conselhoController = require('./app/controller/ConselhoController')

const router = Router()

router.get('/conselho', conselhoController.get)

module.exports = router
