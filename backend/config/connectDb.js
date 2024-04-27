import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      "DB connected",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log("Error while connecting to MongoDb " + err);
    process.exit(1);
  }
};

export default connectDb;
