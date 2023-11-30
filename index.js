import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/UserRoute.js';
import authRoute from './routes/AuthRoute.js';
import commentRoute from './routes/CommentRoute.js';
import contactRoute from './routes/ContactRoute.js';
import questionRoute from './routes/QuestionRoute.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected to MongoDB'));

app.use(cors());

// EXPRESS.JSON ALLOW TO RESPONSE JSON
app.use(express.json());

app.use(cookieParser());

app.all('/', (req, res) => {
  console.log('Welcome To Api GreenWaste!');
  res.send('Welcome To Api GreenWaste!');
});

app.get('/api', (req, res) => {
  try {
    const successMessage = 'API Response Success!';
    res.status(200).json({ message: successMessage });
  } catch (error) {
    const errorMessage = 'Terjadi kesalahan dalam memproses permintaan.';
    res.status(500).json({ error: errorMessage });
  }
});

// API ROUTE
app.use('/api', userRoute);
app.use('/api', questionRoute);
app.use('/api', commentRoute);
app.use('/api', contactRoute);
app.use('/api/auth', authRoute);

// Middleware Handle Error message
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(port, () => console.log('Server berjalan...'));
