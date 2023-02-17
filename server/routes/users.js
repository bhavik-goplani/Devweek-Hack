const express = require('express')
const router = express.Router()
module.exports = router

router.get('/', (req, res) => {
    res.send({hello : "world" })
})

router.post('/', (req, res) => {
    let data = req.body
    console.log(data.agenda1.heading)
    res.setHeader('Content-Type', 'application/json')
    const sendData = {Sanitycheck : "OK" }
    res.end(JSON.stringify(sendData))
})