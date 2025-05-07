const express = require("express");
const router = express.Router();
const messagesController = require("../controllers/messagesController");
  
router.get("/", messagesController.indexPageGet);

router.get("/new", messagesController.newMessageFormGet);

router.post("/new", messagesController.newMessagePost);

router.get("/message-details", messagesController.messageDetailsGet);


module.exports = router;