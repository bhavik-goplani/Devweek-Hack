const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())

app.get('/', async (req,res) =>{
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this text",
        max_tokens:7,
        temperatue:0
    })
    console.log(response.data)
    res.json({
        message: "Hello world"
    })

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