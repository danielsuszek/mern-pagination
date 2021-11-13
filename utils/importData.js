require("dotenv").config({ path: "./config.env" });
const fs = require("fs");
const Post = require("../models/Post");
const connectDB = require("../config/db");

connectDB();

// const posts = JSON.parse(fs.readFileSync(`${__dirname}/posts.json`, "utf-8"));

const importData = async () => {
  try {
    await Post.create(posts);
    console.log("Data Successfully imported 👌");
    process.exit();
  } catch (error) {
    console.log(`ERROR 💥: ${error}`);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await Post.deleteMany({});
    console.log("Data successfully deleted");
    process.exit();
  } catch (error) {
    console.log(`ERROR 💥: ${error}`);
    process.exit(1);
  }
};

const getAllPosts = async () => {
  try {
    const posts = await Post.find();
    console.log(`Success ${posts}`)
  } catch (error) {
    console.log(`Error ${error}`)
  }
}

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
 else if (process.argv[2] === "--getAllPosts") {
  getAllPosts();
}
