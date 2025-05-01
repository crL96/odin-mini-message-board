const express = require("express");
const router = express.Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  
router.get("/", (req, res) => {
    res.render("index", { messages: messages });
});

router.get("/new", (req, res) => {
    res.render("form");
});

router.post("/new", (req, res) => {
    messages.push( {
        text: req.body.message,
        user: req.body.name,
        added: new Date()
    });
    res.redirect("/");
});

router.get("/message-details", (req, res) => {
    const messageIndex = req.query.index;
    console.log(messageIndex);
    res.render("messageDetails", { message: messages[messageIndex]});
});


module.exports = router;