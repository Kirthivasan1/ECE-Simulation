import express from "express";
import dotenv from "dotenv";
import circuitRoutes from "./routes/circuitRoutes.js";
import assignUserId from "./middleware/auth.js";
import { connectDB } from "./middleware/db.js";
import cors from "cors";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

// User ID Middleware
app.use(assignUserId);

// Middleware
app.use(cors());               // Enable if frontend is running separately
app.use(express.json());       // To parse incoming JSON requests

// Routes
app.use("/api/circuits", circuitRoutes); // More explicit + avoids ambiguity with future APIs

// Start server
app.listen(PORT, () => {
  console.log(` Server listening on http://localhost:${PORT}`);
});

/*
Components (e.g., resistors, capacitors)

Terminals (legs/pins of components)

Nodes/Nets (shared electrical points — wires connect terminals)
*/
