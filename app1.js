const express = require("express");

const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: false }));

const loginPage = require("./routes/login");
const chatPage = require("./routes/chats");

app.use(loginPage);
app.use(chatPage);

app.use("/", (req, res, next) => {
  res.send("<h1>Welcome to My Group Chat Application</h1>");
  console.log("running");
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Running port is ${port}`);
});
