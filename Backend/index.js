const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const marketRoutes = require("./routes/marketRoutes");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/markets", marketRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB Connected");
}).catch((err) => {
    console.error("MongoDB connection failed:", err.message);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



