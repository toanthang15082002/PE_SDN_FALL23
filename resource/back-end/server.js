import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/database.js";
import tutorialRouter from "./routes/tutorials.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/tutorials", tutorialRouter);

dotenv.config();

const port = process.env.PORT;

app.listen(port, async () => {
  await connectDB();
});
