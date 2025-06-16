const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Replace with your real Gemini API Key
const genAI = new GoogleGenerativeAI('AIzaSyCbBHjpe4zHgHG-vo-4nlu_DPcYMU7C1yM'); 

app.post('/ask', async (req, res) => {
  const { prompt } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // gemini-1.5, NOT "gemini-1.5-version"
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    res.json({ reply: response });
  } catch (error) {
    console.error('Gemini API error:', error);
    res.status(500).json({ reply: "Error reaching Gemini API" });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
