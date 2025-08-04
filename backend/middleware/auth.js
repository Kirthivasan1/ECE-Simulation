import { v4 as uuidv4 } from 'uuid';

// Middleware to assign a unique user ID and attach to req.user
function assignUserId(req, res, next) {
    // Generate a unique user ID
    const userId = uuidv4();

    // Attach user object to request
    req.user = { id: userId };
    next();
}

export default assignUserId;