import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

// add middlewares
app.use(cors());
app.use(express.json());


app.listen(PORT, () =>{
  console.log(`Server running on port ${PORT}`);
});

