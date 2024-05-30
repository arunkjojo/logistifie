const express = require("express");
const cors = require("cors");
const blogRoute = require("./routers/blogRouter");
const errorHandler = require("./middlewares/errorHandler");
const corsOptions = require("./utils/cors");

const app = express();
const port = 5000;

app.use(cors(corsOptions));
app.use("/api/blog", blogRoute);
app.use(errorHandler);
app.get("/", (req, res) => {
  res.send("This is the Logistifie assignment API in Express.JS");
});

app.listen(port, () =>
  console.log(`Server Listening: http://localhost:${port}`)
);
