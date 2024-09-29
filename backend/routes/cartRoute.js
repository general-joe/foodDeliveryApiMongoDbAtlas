import express from "express";
import {
  addToCart,
  romoveFromCart,
  getCart,
} from "../controllers/cartController.js";
import authMiddleWare from "../middlewares/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleWare, addToCart);
cartRouter.delete("/remove", authMiddleWare, romoveFromCart);
cartRouter.get("/get", authMiddleWare, getCart);

export default cartRouter;
