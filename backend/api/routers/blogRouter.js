const express = require("express");
const router = express.Router();
const { getAllBlogs, getBlog } = require("../controllers/blogControllers");

router.route("/blogs").get(getAllBlogs);
router.route("/blogs/:page_number").get(getAllBlogs);
router.route("/blog/:id").get(getBlog);

module.exports = router;
