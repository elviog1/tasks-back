import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tasks:tasks@tasks.ujdoa68.mongodb.net/"
    );
    console.log("Mongoose connected")
  } catch (error) {
    console.log(error);
  }
};
