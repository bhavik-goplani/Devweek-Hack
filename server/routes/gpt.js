const express = require('express')
const router = express.Router()

const agendaType = "main"
const subheading = "Rundown"
const text = "today we are going to go over the failed launch of our DAO and our goals for next week. im excited about the future of the DAO project"



router.get('/', async (req,res) =>{
    const {message} = req.body

    if(agendaType == "main"){
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Generate bullet point list to summarize the discussion under meeting agenda heading " + subheading+ "for this text: "+ text,
            max_tokens:1000,
            
        })
        console.log(response.data)

        if (response.data.choices[0].text){
            res.json({message: response.data.choices[0].text})
        }
    
    }
   


})



const OpenAI = require('openai')
const {Configuration, OpenAIApi} = OpenAI


const configuration = new Configuration({
    
    apiKey: process.env.GPT,
});
const openai = new OpenAIApi(configuration);
module.exports = router