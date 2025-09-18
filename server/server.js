import express from "express";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import userRoutes from './routes/userRoutes.js'
import incomeRoutes from './routes/incomeRoutes.js'
dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(
  cors({
    origin: "https://effective-engine-r4vx4vgwv99435x6p-5173.app.github.dev",
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cookie",
      "X-Requested-With",
    ],
    methods: ["POST", "GET", "PUT", "DELETE", "OPTIONS", "HEAD"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

connectDB();
app.use('/api/users', userRoutes)
app.use('/api/incomes', incomeRoutes)
app.get("/", (req, res) => {
  res.send("Server is running...");
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`.yellow);
});
