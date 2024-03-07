const mongoose = require("mongoose");
const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    console.log(process.env.MONGO_URL);
    process.exit(1);
  }
};
module.exports = { connectdb };
