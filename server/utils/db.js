const mongoose = require('mongoose')

const URI = "mongodb://localhost:27017/parcel";

// mongoose.connect(URI);

const connectDb = async () => {
    try {
        await mongoose.connect(URI)
        console.log("connection sucessfull to database");
        
    } catch (error) {
        console.error("Database conection failed");
        process.exit(0);   
    }
}

module.exports = connectDb;