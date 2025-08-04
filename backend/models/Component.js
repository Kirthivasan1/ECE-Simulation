import mongoose from "mongoose";

const componentSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['resistor', 'capacitor', 'inductor', 'battery', 'transistor'],
    required: true
  },
  properties: {
    resistance: Number,
    capacitance: Number,
    inductance: Number,
    voltage: Number,
    current: Number,
    gain: Number // For transistors if needed
  },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
  terminal0: [{ type: mongoose.Schema.Types.ObjectId, ref: "Terminal" }],
  terminal1: [{ type: mongoose.Schema.Types.ObjectId, ref: "Terminal" }],
  circuit: { type: mongoose.Schema.Types.ObjectId, ref: "Circuit" }
});

export default mongoose.model('Component', componentSchema);
