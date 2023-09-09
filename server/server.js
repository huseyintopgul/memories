import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// routes
import postRoutes from './routes/posts.js';
// express
const app = express();
const port = process.env.PORT || 8000;
// middlewares
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/posts', postRoutes);

// database connection
const CONNECTION_URL = 'mongodb+srv://huseyintopgul1:memories@memories.pxhhdjt.mongodb.net';
// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(port, () => console.log(`Server running on port: ${port}`)))
//     .catch((error) => console.log(`Port ${port} did not connect!`))
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connection successful');
        app.listen(port, () => {
            console.log(`Server running on port: ${port}`);
        });
    })
    .catch((error) => console.log(`MongoDB connection failed: ${error.message}`));
mongoose.set('findOneAndUpdate', false, 'findOneAndDelete', false);
