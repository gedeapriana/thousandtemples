import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import DestinationRoute from "./routes/DestinationRoutes.js";
import CategoryRoute from "./routes/CategoryRoutes.js";
const app = express();
dotenv.config();


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database connected ...'))

app.use(cors());
app.use(express.json());
app.use(DestinationRoute);
app.use(CategoryRoute);
app.listen(process.env.PORT, () => { console.log(`server up and running on port ${process.env.PORT}`) })

