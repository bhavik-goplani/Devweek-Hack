const express = require('express')
const router = express.Router()

router.get('/', async (req,res) =>{
    const {message} = req.body

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: 'who is emma nasseri?',
        max_tokens:30,
        
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
    
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
module.exports = router