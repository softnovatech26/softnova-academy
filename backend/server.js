import "dotenv/config";

import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

// Middleware
app.use(
  cors({
    // as jagaha pe humna real domain ka url daal diya hai jisse ki humara backend sirf usi domain se request accept karega....
    origin: [
      "https://softnova-academy-ptb4pfthh-soft-nova-tech-s-projects.vercel.app",
      "https://softnova-academy-tan.vercel.app"
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SoftNova Academy Backend is Running 🚀",
  });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});