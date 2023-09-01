import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// routes
import postRoutes from './routes/posts.js';
// express
const app = express();
// middlewares
app.use(bodyParser.json({ limit: '30mb', extend: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/posts', postRoutes);
// database connection
const CONNECTION_URL = 'mongodb+srv://huseyintopgul1:memories@memories.pxhhdjt.mongodb.net/';
const PORT = process.env.PORT || 5173;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(`Port ${PORT} did not connect!`))
mongoose.set('findOneAndUpdate', false, 'findOneAndDelete', false);