const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.json({message: 'Este es el inicio'}))


module.exports = router
