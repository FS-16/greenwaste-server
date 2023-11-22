import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/UserRoute.js';
import cors from 'cors';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(5000, () => console.log('Server running...'));

app.use(cors());
app.use(express.json());

// API ROUTE
app.use('/api', userRoute);
