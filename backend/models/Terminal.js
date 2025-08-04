// Basically node.js

import mongoose from "mongoose";

const terminalSchema = new mongoose.Schema({
  // The _id field will automatically serve as our node identifier
  connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "Terminal" }], // For tracking merged/connected terminals
});

export default mongoose.model("Terminal", terminalSchema);
