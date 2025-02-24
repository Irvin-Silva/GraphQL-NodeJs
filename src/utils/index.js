import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { validate } from 'uuid';

const SECRET = process.env.JWT_SECRET || "fallbackSecretKey";

export const hashPassword = async (password) => {
    if (password.length < 6) {
        throw new Error('Password must be 6 characters or longer.');
    }

    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

export const validatePassword = async (requestPassword, password) => {
    return bcrypt.compare(requestPassword, password);
};

export const generateToken = (userId) => {
    return jwt.sign({ userId }, SECRET, { expiresIn: '2d' });
};

export const getUserId = (request) => {
    
    const header = request.headers.get('authorization');
    
    if (!header) {
        throw new Error('Authentication required');
    }

    const token = header.replace('Bearer ', '');
    try {
        const decoded = jwt.verify(token, SECRET);
        return decoded.userId;
    } catch (e) {
        throw new Error('Invalid token');
    }
};