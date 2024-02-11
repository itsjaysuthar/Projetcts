const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.connectionString);
        console.log('Connected to mongo!!!');
        return 1;
    } catch (err) {
        console.log('Could not connect to MongoDB', err);
        return 0;
    }
}

module.exports = connectToDb;