import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import DestinationRoute from "./routes/DestinationRoutes.js";
import SubdistrictRoute from "./routes/SubdistrictRoutes.js";
import TodoRoute from "./routes/TodoRoutes.js";

const app = express();

mongoose.connect("mongodb://0.0.0.0:27017/db_thousandtemples", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database connected..."));

const port = 5000;
app.use(cors());
app.use(express.json());
app.use(DestinationRoute);
app.use(SubdistrictRoute);
app.use(TodoRoute);

app.listen(port, () => console.log(`server up and running on port ${port}`));
