const express = require('express')
const router = express.Router()

router.get('/', async (req,res) =>{
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this text",
        max_tokens:7,
        temperatue:0
    })
    console.log(response.data)
    if (response.data.choices[0].text){
        res.json({message: response.data.choices[0].text})
    }
    res.json({
        message: "Hello world"
    })

})



const OpenAI = require('openai')
const {Configuration, OpenAIApi} = OpenAI


const configuration = new Configuration({
    organization: "org-CtbyLQVWPne6XC9sQfuMqGNf",
    apiKey: process.env.GPT,
});
const openai = new OpenAIApi(configuration);
module.exports = router