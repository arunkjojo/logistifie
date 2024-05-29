const express = require("express");
const { blogData } = require("./DUMMY");

const app = express();
const port = 5000;

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/blog", (req, res) => {
  res.json(blogData);
});

app.get("/api/blog/:id", (req, res) => {
  const id = req.params.id;
  const blogPost = blogData.find((post) => post.id === parseInt(id));
  if (blogPost) {
    res.json(blogPost);
  } else {
    res.status(404).json({ message: "Blog post not found" });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
