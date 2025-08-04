import Circuit from "../models/Circuit.js";
import Component from "../models/Component.js";
import Terminal from "../models/Terminal.js";

// Create a full circuit composed of components, terminals, and nodes
export async function createCircuit(req, res) {
  try {
    const user = req.user;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    // Step 1: Create the circuit
    const circuit = new Circuit({ name, user: user._id });
    await circuit.save();

    res
      .status(201)
      .json({ message: "Circuit created", circuitId: circuit._id });
  } catch (error) {
    console.error("Error creating circuit:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Return all top-level components (you can extend to populate terminals)
export async function getCircuits(req, res) {
  try {
    const circuits = await Circuit.find({});
    res.status(200).json(circuits);
  } catch (error) {
    console.error("Error fetching circuits:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getCircuitById(req, res) {
  try {
    const { id } = req.params;
    const component = await Circuit.findById(id);

    if (!component) {
      return res.status(404).json({ message: "Component not found" });
    }

    res.status(200).json(component);
  } catch (error) {
    console.error("Error fetching component by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateCircuit(req, res) {
  try {
    const { id } = req.params;
    const { operation, type, properties, position } = req.body;

    if (!operation || !type || !properties || !position) {
      return res.status(400).json({ message: "Insufficient data" });
    }

    if (operation === "add") {
      // Create terminals - their _ids will serve as node identifiers
      const terminal0 = new Terminal({ connections: [] });
      const terminal1 = new Terminal({ connections: [] });
      await terminal0.save();
      await terminal1.save();

      // Create component
      const newComponent = new Component({
        type,
        properties,
        position,
        terminal0: [terminal0._id],
        terminal1: [terminal1._id],
        circuit: id,
      });
      await newComponent.save();

      // Add component to circuit
      const updatedComponent = await Circuit.findByIdAndUpdate(
        id,
        { $push: { components: newComponent._id } },
        { new: true }
      );

      res.status(200).json(updatedComponent);
    }
  } catch (error) {
    console.error("Error updating component:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteCircuit(req, res) {
  try {
    const { id } = req.params;

    const component = await Circuit.findById(id);
    if (!component) {
      return res.status(404).json({ message: "Component not found" });
    }

    await Circuit.findByIdAndDelete(id);

    res.status(200).json({ message: "Circuit deleted successfully" });
  } catch (error) {
    console.error("Error deleting circuit:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
