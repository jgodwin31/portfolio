import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import OpenAI from "openai";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/api/analyze", async (req, res) => {
  const { resume, projects } = req.body;
  const prompt = `Here is a resume:\n${resume}\n\nAnd projects:\n${projects}\n\nSuggest the best job roles for this person.`;

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a career advisor." },
        { role: "user", content: prompt }
      ],
    });
    res.json({ recommendations: response.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
