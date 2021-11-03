const Chat = require('../models/chat');

const addMessage = async (data) => {
  const chat = new Chat(data);
  try {
    await chat.save();
  } catch (err) {
    throw err;
  }
};
const readMessages = async (data) => {
  try {
    const messages = await Chat.find({ roomname: data });
    return messages;
  } catch (err) {
    throw err;
  }
};
module.exports = { addMessage, readMessages };
