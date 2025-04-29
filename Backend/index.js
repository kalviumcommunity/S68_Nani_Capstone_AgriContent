const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { route } = require("./src/Routers/marketRoutes");
const router = require("./src/Routers/marketRoutes");


dotenv.config({path:'./src/config/.env'});

const app = express();
app.use(express.json());

app.use("/api/markets", router);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("MongoDB Connected");
}).catch((err) => {
    console.error("MongoDB connection failed:", err.message);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




