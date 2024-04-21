import mongoose from "mongoose";

const database_connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected to db");
  } catch (error) {
    console.log("error in databse" + error.message);
  }
};

export default database_connection;
