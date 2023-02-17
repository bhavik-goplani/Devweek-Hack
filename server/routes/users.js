const express = require('express')
const router = express.Router()
module.exports = router

router.get('/', (req, res) => {
    res.send("hello")
    console.log(req.body) 
})

router.post('/', (req, res) => {
    res.send(`Sanity Check ${req.body}`)
})