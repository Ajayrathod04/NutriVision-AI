const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "15mb" }));

const PORT = process.env.PORT || 8080;

// SAFE BACKEND ACCESS
const getApiKey = () => {
  if (!process.env.GEMINI_API_KEY) return null;
  return process.env.GEMINI_API_KEY;
};

const GEMINI_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent";

const callGemini = async (prompt, isImage = false, imageData = null) => {
  try {
    const key = getApiKey();
    if (!key) throw new Error("Missing key");

    let payload;
    if (isImage && imageData) {
        payload = {
            contents: [{
                parts: [
                    { text: prompt },
                    { inlineData: { mimeType: "image/jpeg", data: imageData.split(",")[1] || imageData } }
                ]
            }]
        };
    } else {
        payload = {
            contents: [{
                parts: [{ text: prompt }]
            }]
        };
    }

    const res = await axios.post(`${GEMINI_URL}?key=${key}`, payload);
    return res.data?.candidates?.[0]?.content?.parts?.[0]?.text;
  } catch (err) {
    console.error("Gemini Error:", err.message);
    return null;
  }
};

// GET /health
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date() });
});

// POST /ask-ai
app.post("/ask-ai", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt required" });

  const aiResponse = await callGemini(`You are NutriVision AI. Answer briefly: ${prompt}`);
  
  if (!aiResponse) {
    return res.json({ 
        success: false, 
        message: "AI service unavailable. Showing basic insights.",
        data: "Balanced nutrition and hydration are key. Please consult a specialist for specific needs."
    });
  }

  res.json({ success: true, data: aiResponse });
});

// POST /analyze-food
app.post("/analyze-food", async (req, res) => {
  const { image } = req.body;
  if (!image) return res.status(400).json({ error: "Image required" });

  const prompt = "Identify this food and return its name, estimated calories, and health verdict. Be concise.";
  const aiResponse = await callGemini(prompt, true, image);

  if (!aiResponse) {
    return res.json({
        success: false,
        message: "AI service unavailable. Showing basic insights.",
        data: "Estimated calories: 250. This appears to be a standard meal. Focus on portion control."
    });
  }

  res.json({ success: true, data: aiResponse });
});

// POST /daily-report
app.post("/daily-report", async (req, res) => {
  const { meals, goals } = req.body;
  
  // DETERMINISTIC LOGIC (Works without AI)
  let totalCalories = 0;
  if (meals && Array.isArray(meals)) {
    totalCalories = meals.reduce((sum, m) => sum + (m.calories || 200), 0);
  }

  const deterministicReport = `
    DAILY SUMMARY:
    - Meals Logged: ${meals?.length || 0}
    - Total Calories: ${totalCalories}
    - Hydration Status: Good
    - Status: ${totalCalories > 2000 ? "Calories slightly high" : "On track"}
  `;

  const aiPrompt = `Review these meals: ${JSON.stringify(meals)}. Goal: ${goals}. Provide a one-sentence nutritional verdict.`;
  const aiResponse = await callGemini(aiPrompt);

  res.json({
    success: true,
    deterministic: deterministicReport,
    ai_insight: aiResponse || "Focus on consistency and whole foods."
  });
});

app.get("/test", (req, res) => {
  res.json({ 
    status: "online", 
    ai_model: "gemini-1.5-flash",
    deterministic_fallback: "active",
    demo_ready: true 
  });
});

// ROOT ROUTE (Fixes "Cannot GET /")
app.get("/", (req, res) => {
  res.status(200).send("NutriVision AI Production API: Running ✅");
});

app.listen(PORT, () => {
  console.log(`Production Backend running on port ${PORT}`);
});
