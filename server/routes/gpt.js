const express = require('express')
const router = express.Router()

router.get('/', async (req,res) =>{
    const {message} = req.body

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "generate action items from this meeting: [All participants are present in a Zoom meeting] Scrum Master: Alright everyone, welcome to our daily scrum. Let's get started with our updates for today. Who wants to start? Developer 1: I can go first. Yesterday, I completed the integration of the new payment gateway with our application. Today, I'm planning to work on fixing some UI bugs reported by our customers. Scrum Master: Great work, Developer 1. Any blockers or issues that you need help with? Developer 1: No, not at the moment. Everything seems to be going smoothly. Scrum Master: Alright, thanks. How about you, Developer 2? Developer 2: Yesterday, I worked on adding a new feature to our app, which will allow users to schedule appointments with our support team. Today, I'm planning to work on improving the performance of our search feature.  Scrum Master: Sounds good. Any issues or roadblocks that you need help with? Developer 2: No, not right now. I'll let you know if I need anything. Scrum Master: Okay, thank you. How about you, Developer 3? Developer 3: Yesterday, I worked on fixing a few bugs related to our user registration flow. Today, I'm planning to work on adding a new API endpoint for our mobile app. Scrum Master: Great, any issues or blockers? Developer 3: Yes, I'm waiting for access to a test environment, so I can test my changes. Can you help me with that, please? Scrum Master: Sure thing, I'll take care of it. Thanks for bringing it up. [The scrum master takes note of the blocker and assigns someone to help Developer 3] Scrum Master: Alright, thanks everyone for your updates. Let's keep up the good work and make sure we're staying on track with our goals. See you all tomorrow. The meeting ends and everyone logs out of the Zoom call]'",
        max_tokens:1000,
        
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
    
    apiKey: process.env.GPT,
});
const openai = new OpenAIApi(configuration);
module.exports = router