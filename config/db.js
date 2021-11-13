const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: true,
      // useCreateIndex: true,
    });

    console.log("MongoDB Connection Success 👍");
  } catch (error) {
    // console.log((error) => `MongoDB Connection Failed 💥${error}`);
    console.log(`MongoDB Connection Failed 💥${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
