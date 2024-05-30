import fs from "fs";

const getAllBlogs = (req, res) => {
  fs.readFile("../db/DUMMY.json", "utf8", (err, data) => {
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
};
const getBlog = (req, res) => {
  const requestedId = parseInt(req.params.id);

  fs.readFile("../db/DUMMY.json", "utf8", (err, data) => {
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
};

module.exports = { getAllBlogs, getBlog };
