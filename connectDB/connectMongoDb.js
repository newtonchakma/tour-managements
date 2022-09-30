import mongoose from "mongoose";

const connect = async (req, res) => {
  const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pceobfm.mongodb.net/?retryWrites=true&w=majority`;
  const uri = `mongodb+srv://tourData:4aKCjKwjC4cD2ZMK@cluster0.kfbflss.mongodb.net/?retryWrites=true&w=majority`
  console.log(url);
  try {
    await mongoose.connect(uri);
    console.log("Mongodb connected");
  } catch (error) {
    console.log("Error while connecting with Mongodb", error.message);
  }
};

export default connect;

