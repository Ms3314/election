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


module.exports = {
    ensureUserCollection,
    findUserByEmail,
    registerUser,
    
};


// const loginUser = async (email, password)=> {
//     try {
//         const existingUser = await userRepository.findUserByEmail(email);
//             if (existingUser) {
//                 bcrypt.compare(password, existingUser.password , async function(err, result) {
//                     return result
//                 });
//             }
     
//     } catch (error) {
        

//     }
// }
