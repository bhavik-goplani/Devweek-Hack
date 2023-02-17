const express = require('express')
const router = express.Router()

const agendaType = "full"
const subheading = "Rundown"
const textMain = "today we are going to go over the failed launch of our DAO and our goals for next week. im excited about the future of the DAO project"
const textFull= "[Scrum Master]: Good morning everyone! Let's get started with our daily stand-up. [Developer 1]: Hey there! I'm currently working on the new feature for our app. Hoping to finish it up today. [Developer 2]: I'm working on fixing some bugs in the login flow. It's been a bit tricky, but I'm making progress. [Developer 3]: I just finished up the design for the new landing page. I'll be starting on the front-end implementation later today. [Scrum Master]: Great updates, everyone. Is there anything blocking your progress? [Developer 1]: Not really, just waiting on some feedback from the product owner. [Developer 2]: I could use some help from the back-end team to make sure my fixes don't cause any issues elsewhere. [Developer 3]: No blockers for me right now. [Scrum Master]: Thanks for the updates. Let's make sure to communicate any issues or blockers so we can stay on track. Have a productive day!"


router.get('/', async (req,res) =>{
    const {message} = req.body

    if(agendaType == "main"){
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Generate bullet point list to summarize the discussion under meeting agenda heading " + subheading+ "for this text: "+ textMain,
            max_tokens:1000,
            
        })
        console.log(response.data)

        if (response.data.choices[0].text){
            res.json({message: response.data.choices[0].text})
        }
    
    }
    if(agendaType == "full"){
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Generate bullet point action items from the meeting with names for who in the company needs to do it " + subheading+ "for this text: "+ textFull,
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