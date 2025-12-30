import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.post("/chat", async (req, res) => {
  const userText = req.body.message;

  // Replace with real AI API
  res.json({
    reply: userText + " ✔ (Corrected example sentence)"
  });
});

app.listen(3000, () => console.log("Backend running on 3000"));

