const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req,res) =>{
    res.send("hello world")

})

app.listen(port, ()=> {

    console.log("example app listening")
})


const OpenAI = require('openai')
const {Configuration, OpenAIApi} = OpenAI


const configuration = new Configuration({
    organization: "org-CtbyLQVWPne6XC9sQfuMqGNf",
    apiKey: process.env.GPT,
});

const openai = new OpenAIApi(configuration);


const router = express.Router()
module.exports = router