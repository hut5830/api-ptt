const mongoose = require('mongoose');

const uri = "mongodb+srv://hut5830:Farhut5830@cluster0.xao2vhp.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0";

connectDB = async () => {
    try {
        const db = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB with Mongoose");
        return db;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};

connectDB()