import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import bodyParser from "body-parser";
import orderRouter from "./routes/orderRoute.js";

//App config
const app = express();
const port = 2000;

//Middlewares
app.use(bodyParser.json());
// app.use(express.json());
app.use(cors());
dotenv.config();

//DB Connection
connectDB();

//API endpoints
app.use("/api/foods", foodRouter);
//Endpoint to show the image to the frontend or the client
app.use("/images", express.static("uploads"));
app.use("/api/users", userRouter)
app.use("/api/carts", cartRouter)
app.use("/api/orders", orderRouter)

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server has started on http://localhost:${port}`);
});

//
