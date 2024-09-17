const mongoose = require('mongoose')

const URI = "mongodb://localhost:27017/parcel";

mongoose.connect(URI);

const connectDb = async () => {
    try {
        await mongoose.connect(URI)
    } catch (error) {
        console.error("Database conection failed");
        
    }
}

module.exports = connectDb;