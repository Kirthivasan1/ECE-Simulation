import mongoose from 'mongoose';

const CircuitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    components: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Component' }]
});

export default mongoose.model('Circuit', CircuitSchema);