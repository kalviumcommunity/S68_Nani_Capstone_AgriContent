const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./src/Routers/marketRoutes');


dotenv.config({path:'./src/config/.env'});

const app = express();
app.use(express.json());

app.use('/api/markets', router);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
 
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
  });

