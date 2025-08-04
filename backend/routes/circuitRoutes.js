import express from "express";
import {
  createCircuit,
  getCircuits,
  getCircuitById,
  updateCircuit,
  deleteCircuit
} from "../controllers/circuitController.js";

const router = express.Router();

// Base path: /api/components or /api/circuit-elements (depending on naming preference)
router.get("/", getCircuits);
router.post("/", createCircuit);
router.get("/:id", getCircuitById);
router.put("/:id", updateCircuit);
router.delete("/:id", deleteCircuit); 

export default router;
