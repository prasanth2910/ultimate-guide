const mongoose = require('mongoose');
const { Schema } = mongoose;

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb+srv://potnuruprasanth2910:0QfojpKTre1LsLwt@cluster0.fceqkhc.mongodb.net/');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

const signupSchema = new Schema({
    Username: String,
    email: String,
    password: String,
});

const Signup = mongoose.model('Signup', signupSchema);

const userSchema = new Schema({
    Username: String,
    password: String,
    email: String,
});

const User = mongoose.model('User', userSchema);

const blogSchema = new Schema({
    blogs: [String],
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = { Signup, User, Blog, connectToDatabase };
