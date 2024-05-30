const express = require("express");
const fs = require("fs");
const { blogData } = require("./DUMMY");

const app = express();
const port = 5000;

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", [
    "http://localhost:3000",
    "https://logistifie-ivory.vercel.app",
    "http://logistifie-ivory.vercel.app",
  ]); // Update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/blog", (req, res) => {
  fs.readFile(__dirname + "/DUMMY.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading file");
      return;
    }

    const jsonData = JSON.parse(data);
    const blogData = jsonData.blogData;

    if (blogData) {
      res.json(blogData);
    } else {
      res.status(404).send("Blogs are not found");
    }
  });
});

app.get("/api/blog/:id", (req, res) => {
  const requestedId = parseInt(req.params.id);

  fs.readFile(__dirname + "/DUMMY.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading file");
      return;
    }

    const jsonData = JSON.parse(data);
    const blogData = jsonData.blogData.find((u) => u.id === requestedId);

    if (blogData) {
      res.json(blogData);
    } else {
      res.status(404).send("This blog not found");
    }
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
