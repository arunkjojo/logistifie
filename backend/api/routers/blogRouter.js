const express = require("express");
const router = express.Router();
const { getAllBlogs, getBlog } = require("../controllers/blogControllers");

router.route("/").get(getAllBlogs);
router.route("/:id").get(getBlog);

module.exports = router;
