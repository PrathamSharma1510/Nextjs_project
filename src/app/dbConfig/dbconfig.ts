import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to MongoDB");
    });

    connection.on("error", () => {
      console.log("Error connecting to MongoDB");
      process.exit();
    });
  } catch (err) {
    console.log(err);
  }
}
