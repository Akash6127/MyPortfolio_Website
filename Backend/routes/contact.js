const express = require('express');
const router = express.Router();
const Message = require('../models/Message.js');

router.post('/post-message', async (req, res) => {
  try {
    const { first_name, last_name, email, number, message } = req.body;
    console.log('Received message:', req.body);

    const newMessage = new Message({ first_name, last_name, email, number, message });
    await newMessage.save();
    console.log('Message saved:', newMessage);
    res.status(200).json({ status: 'success', message: 'Message received and stored.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Failed to save message.' });
  }
});

module.exports = router;
