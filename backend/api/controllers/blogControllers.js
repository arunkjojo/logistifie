const fs = require("fs");
const path = require("path");
const pagination = require("../utils/pagination");

const getAllBlogs = (req, res) => {
  var page_number = req.params.page_number
    ? parseInt(req.params.page_number)
    : 1;
  const page_size = 4; // Number of items per page
  try {
    const filePath = path.join(__dirname, "../db/DUMMY.json");
    const data = fs.readFileSync(filePath, "utf8");
    const jsonData = JSON.parse(data);
    const arrayData = jsonData.blogData;
    const paginatedData = pagination(arrayData, page_size, page_number);
    // const blogData = jsonData.blogData;
    if (paginatedData) {
      res.json({
        totalPost: arrayData.length,
        blogData: paginatedData,
        errorMessage: "",
      });
    } else {
      res.status(404).json({
        totalPost: 0,
        blogData: [],
        errorMessage: "The Blogs are empty",
      });
    }
  } catch (err) {
    res.status(500).send(`Error fetching data, Please try again later. ${err}`);
  }
};

const getBlog = (req, res) => {
  const requestedId = parseInt(req.params.id);

  try {
    const filePath = path.join(__dirname, "../db/DUMMY.json");
    const data = fs.readFileSync(filePath, "utf8");
    const jsonData = JSON.parse(data);
    const blogData = jsonData.blogData.find((b) => b.id === requestedId);
    if (blogData) {
      res.json({
        totalPost: 1,
        blogData: blogData,
        errorMessage: "",
      });
    } else {
      //res.status(404).send(`<h1>This Blog post is not found</h1><p>Please search correct Blog ID <a href="https://logistifie-apis.vercel.app/api/blog">https://logistifie-apis.vercel.app/api/blog</a></p>`);
      res.status(404).json({
        totalPost: 0,
        blogData: [],
        errorMessage: "This Blog post is not found",
      });
    }
  } catch (err) {
    res.status(500).send("Error fetching data, Please try again later.");
  }
};

module.exports = { getAllBlogs, getBlog };
