// controllers/userController.js
const bcrypt = require('bcrypt');
const userRepository = require('../repositories/userRepository');

// Register a new user
const registerUser = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;

        // Ensure User collection exists
        await userRepository.ensureUserCollection();

        // Check if user already exists
        const existingUser = await userRepository.findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });
        }
        password = await bcrypt.hash(password , 10);
        // Create a new user
        const newUser = await userRepository.registerUser({ username, email, password });
        res.status(201).json({ message: "User registered successfully!" });
    } catch (err) {
        next(err);
    }
};

const loginUser = async (req , res , next) => {
    const { email , password } = req.body;
    const existingUser = await userRepository.findUserByEmail(email);
        if (existingUser) {
            // we need to store the data 
            // first we have to hash the password 
            res.send(hashedPassword)
        }

}

module.exports = {
    registerUser
};
