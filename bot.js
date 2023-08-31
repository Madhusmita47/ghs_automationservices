// const TelegramBot = require('node-telegram-bot-api');
// const axios = require("axios");

// // 6224127289:AAG4-1b8cxjuMuzr7QHNtOTTSyh0k8B7qko
// // Replace with your bot token

// const botToken ='6094576247:AAEL4XIStBSrr69xvv7rxhdoY0nfRr1ypJ4';

// // Create a new bot instance
// const bot = new TelegramBot(botToken, { polling: true });

// // Handle incoming messages
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     console.log(chatId)
//     const messageText = msg.text;
//     console.log(messageText)

//     // Check if the message is not a command and reply with an auto-reply
//     if (messageText.startsWith('HI')) {
//         const replyText = "This is an auto-reply. Thank you for your message!";
//         bot.sendMessage(chatId, replyText);
//     }
// });

// const currentDate = new Date();
// const formattedCurrentDate = currentDate.toISOString().split("T")[0];
// console.log(formattedCurrentDate);
