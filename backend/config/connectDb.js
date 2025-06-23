import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error("MONGODB_URI is not defined in .env");
    process.exit(1);
  }

  try {
    const connect = await mongoose.connect(uri);

    console.info(
      `MongoDB connected: ${connect.connection.host} (${connect.connection.name})`
    );
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }

  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected");
  });

  mongoose.connection.on("error", err => {
    console.error("MongoDB error:", err);
  });
};

export default connectDb;
