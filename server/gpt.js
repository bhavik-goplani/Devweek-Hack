
const OpenAI = require('openai')
const {Configuration, OpenAIApi} = OpenAI


const configuration = new Configuration({
    organization: "org-CtbyLQVWPne6XC9sQfuMqGNf",
    apiKey: process.env.GPT,
});
const openai = new OpenAIApi(configuration);
