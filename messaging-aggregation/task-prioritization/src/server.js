const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Example route to aggregate messages from different messaging APIs
app.get('/messages', async (req, res) => {
    try {
        // Fetch messages from Slack
        const slackMessages = await axios.get('https://slack.com/api/conversations.history', {
            headers: { 'Authorization': `Bearer YOUR_SLACK_API_TOKEN` }
        });

        // Fetch messages from WhatsApp (for example purposes, replace with actual API)
        const whatsappMessages = await axios.get('https://api.whatsapp.com/YOUR_WHATSAPP_API_ENDPOINT');

        // Combine messages from both platforms
        const aggregatedMessages = {
            slack: slackMessages.data.messages,
            whatsapp: whatsappMessages.data
        };

        res.status(200).json(aggregatedMessages);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching messages' });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

let memeTokens = [];

app.post('/vote', (req, res) => {
    const { meme, vote } = req.body;
    const existingMeme = memeTokens.find(m => m.meme === meme);
    if (existingMeme) {
        existingMeme.votes += vote;
    } else {
        memeTokens.push({ meme, votes: vote });
    }
    res.status(200).json(memeTokens);
});
