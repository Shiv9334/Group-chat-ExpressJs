const { response } = require("express");
const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/chats", (req, res, next) => {
  const message = fs.readFileSync("chatMsgs.txt", "utf-8");
  res.send(`
    <html>
    <body>
    <h1> Chats</h1>
    <h4>${message}<h4>
    <form action='/chats' method='POST'>
    <input type = 'text' name ='message'>
    <button>Send Message</button>
    </form>

    <script>
    let user = localStorage.getItem('user');
  let name = document.querySelector('input');
  name.name = user;
    </script>

  </body>
  </html>`);
});

router.post("/chats", (req, res, next) => {
  msg = JSON.stringify(req.body);
  fs.appendFile("chatMsgs.txt", msg, (err) => {
    console.log(err);
  });
  res.redirect("/chats");
});

module.exports = router;
