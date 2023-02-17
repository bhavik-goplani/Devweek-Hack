const express = require('express')
const router = express.Router()

router.get('/', async (req,res) =>{
    const {message} = req.body

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "when will thw world end",
        max_tokens:1000,
        
    })
    console.log(response.data)

    if (response.data.choices[0].text){
        res.json({message: response.data.choices[0].text})
    }

})



const OpenAI = require('openai')
const {Configuration, OpenAIApi} = OpenAI


const configuration = new Configuration({
    
    apiKey: process.env.GPT,
});
const openai = new OpenAIApi(configuration);
module.exports = router