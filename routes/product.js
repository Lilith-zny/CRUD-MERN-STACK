const express = require('express')
const router = express.Router()

router.get('/products', (req, res) => {
    res.send('Hello Product routes')
})


module.exports = router