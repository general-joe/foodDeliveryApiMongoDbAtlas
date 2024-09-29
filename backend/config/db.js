import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://De-General:Vengeance3682@cluster0.t7dij.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
