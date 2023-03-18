const express = require("express");
const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(`<html>
    <body>
    <h1>This is group Chat Application</h1>
    <form action ="/login" method = "POST">
    <input type ='text' Id = 'name' class = 'name'>
    <button Id = 'submitBtn' type = 'submit'>Enter your name</button>
    </form>
    
    <script>
    document.getElementById('submitBtn').addEventListener('click', () => {
        const name = document.getElementById('name').value;
        localStorage.setItem('user', name);
    })
    </script>
    </body>
    </html>`);
});

router.post("/login", (req, res, next) => {
  res.redirect("/chats");
});

module.exports = router;
