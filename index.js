const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;

app.get('/api/image/random', async (req, res) => {
    try {
        const response = await axios.get('https://random.dog/woof.json');
        res.json({ imageUrl: response.data.url });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch random dog image' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
