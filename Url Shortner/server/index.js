import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { nanoid } from "nanoid";
import Url from "./models/Url.js";
import dotenv from "dotenv";

dotenv.config({ override: true });

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("💚 MongoDB connected on Port No : ", PORT))
  .catch((err) => console.error("❌ MongoDB connection error", err));

// POST: Create short URL
app.post("/shorten", async (req, res) => {
  const { originalUrl } = req.body;
  const shortId = nanoid(6);
  const shortUrl = `${process.env.BASE_URL}/${shortId}`;

  const newUrl = new Url({
    originalUrl,
    shortId,
    shortUrl,
  });
  await newUrl.save();
  res.json({ shortUrl });
});

// GET: Redirect to original URL
app.get("/:shortId", async (req, res) => {
  const { shortId } = req.params;
  const url = await Url.findOne({ shortId });
  if (url) {
    return res.redirect(url.originalUrl);
  } else {
    return res.status(404).json({ error: "URL not found" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
