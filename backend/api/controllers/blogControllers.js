const fs = require("fs");
const path = require("path");

const getAllBlogs = (req, res) => {
  try {
    const filePath = path.join(__dirname, "../db/DUMMY.json");
    const data = fs.readFileSync(filePath, "utf8");
    const jsonData = JSON.parse(data);
    const blogData = jsonData.blogData;
    if (blogData) {
      res.json(blogData);
    } else {
      res.status(404).send("Blogs are not found");
    }
  } catch (err) {
    res.status(500).send("Error fetching DUMMY data");
  }
};
const getBlog = (req, res) => {
  const requestedId = parseInt(req.params.id);

  try {
    const filePath = path.join(__dirname, "../db/DUMMY.json");
    const data = fs.readFileSync(filePath, "utf8");
    const jsonData = JSON.parse(data);
    const blogData = jsonData.blogData.find((u) => u.id === requestedId);
    if (blogData) {
      res.json(blogData);
    } else {
      res.status(404).send("This Blog is not found");
    }
  } catch (err) {
    res.status(500).send("Error fetching DUMMY data");
  }
};

module.exports = { getAllBlogs, getBlog };
