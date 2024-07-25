const mongoose = require("mongoose");

const connectDb = async () => {
    const URI = "mongodb+srv://tusharkumar:nppX3DKdseMzEyx3@gamingcluster.ctjmr11.mongodb.net/?retryWrites=true&w=majority&appName=gamingCluster";
    try {
        await mongoose.connect(URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log("Connected to the database successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
};

module.exports = connectDb;
