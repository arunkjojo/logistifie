const express = require("express");
const cors = require("cors");
const blogRoute = require("./routers/blogRouter");
const errorHandler = require("./middlewares/errorHandler");
const corsOptions = require("./utils/cors");

const app = express();
const port = 5000;

app.use(cors(corsOptions));
app.use("/api", blogRoute);
app.use(errorHandler);
app.get("/", (req, res) => {
  res.send(
    ` <h1>This is the Logistifie assignment-2 API in Express.JS</h1> <p>1. All blog posts link is <a href="https://logistifie-apis.vercel.app/api/blog">https://logistifie-apis.vercel.app/api/blog</a></p> <p>2. Single blog post link is <a href="https://logistifie-apis.vercel.app/api/blog/1">https://logistifie-apis.vercel.app/api/blog/1</a></p> `
  );
});

app.listen(port, () =>
  console.log(`Server Listening: http://localhost:${port}`)
);
