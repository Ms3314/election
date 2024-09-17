// repositories/userRepository.js

const User = require('../../../../models/user');

// Check if User collection exists, if not, create it
const ensureUserCollection = async () => {
    if (!(await User.exists())) {
        await User.createCollection();
    }
};

// Check if user already exists
const findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

// Register a new user
const registerUser = async (userData) => {
    const newUser = new User(userData);
    return await newUser.save();
};

const checkPassword = async (email, password)=> {
    const User = await findUserByEmail(email)
    
}

module.exports = {
    ensureUserCollection,
    findUserByEmail,
    registerUser
};
