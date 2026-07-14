import "dotenv/config";

import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";


const app = express();


// Middleware
app.use(cors());
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