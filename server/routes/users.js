const express = require('express')
const router = express.Router()
module.exports = router

router.get('/', (req, res) => {
    console.log(req.body) 
})