import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/UserRoute.js';
import cors from 'cors';

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected to MongoDB'));

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  try {
    const successMessage = 'API Response Success!';
    res.status(200).json({ message: successMessage });
  } catch (error) {
    const errorMessage = 'Terjadi kesalahan dalam memproses permintaan.';
    res.status(500).json({ error: errorMessage });
  }
});

app.use('/api', userRoute);

app.listen(5000, () => console.log('Server berjalan...'));
