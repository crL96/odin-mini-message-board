const db = require("../db/queries");

async function indexPageGet(req, res) {
    const messages = await db.getAllMessages();
    res.render("index", { messages: messages});
};

async function newMessagePost(req, res) {
    await db.insertMessage(req.body.name, req.body.message)
    res.redirect("/");
}

async function messageDetailsGet(req, res) {
    const messageDetails = await db.getSingleMessage(req.query.id);
    res.render("messageDetails", { message: messageDetails});
}

function newMessageFormGet(req, res) {
    res.render("form");
}

module.exports = {
    indexPageGet,
    newMessagePost,
    messageDetailsGet,
    newMessageFormGet
}