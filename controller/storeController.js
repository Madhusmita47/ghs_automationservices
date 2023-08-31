const catchAsyncError = require("../middleware/catchasyncErrors");
const storeService = require("../service/storeService");
const fs = require("fs");
const path = require("path");
const { dbQuery } = require("../config/database");
const info = require("../config/test")
//----------------------------------------------------------------------------------
const TelegramBot = require("node-telegram-bot-api");
const botToken = info.BOT_TOKEN;
const axios = require("axios");
const bot = new TelegramBot(botToken, { polling: true });
const createStore = async (req, res) => {
  try {
    const store = req.body;
    const result = await storeService.createStore(store);
    if (store.storestatus === "Open") {
      sendMessageToTelegramWhenStoreOpen();
    } else if (store.storestatus === "Close") {
      sendMessageToTelegramWhenStoreClose();
    }

    //res.status(201).json({ message: result.message });
  } catch (error) {
    // Handle error
    catchAsyncError(error);
  }
};

const checkStoreOpen = async (req, res) => {
  try {
   
    const storeList = await storeService.storeNameList();

    for (let k = 0; k < storeList.length; k++) {
      const storeNotOpen = await storeService.checkStoreIsOpen(
        storeList[k].storename
      );
      if (storeNotOpen) {
        checkStoreIsOpen(storeList[k].storename);
      }
    }

    
  } catch (error) {
    catchAsyncError(error);
  }
};



const checkStoreIsOpen = async (storeName) => {
  try {
    

    const emp = await dbQuery(
      `SELECT EMP_TLGM_CHAT_ID  FROM employee_list WHERE ROLE_ID = "M1"`
    );

    const currentDate = new Date();
    const formattedCurrentDate = currentDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD

    // for (let k = 0; k < storeList.length; k++) {
    // store[k].storename

    for (let l = 0; l < emp.length; l++) {
      const replyText =
        "Store Name: " +
        storeName +
        "\n" +
        "is not opened till now for Today's Date: " +
        formattedCurrentDate;
      // "dates: " +
      // store[k].dates;

      bot.sendMessage(emp[l].EMP_TLGM_CHAT_ID, replyText);
      // }
    }
  } catch (error) {
    catchAsyncError(error);
  }
};

// Replace with your bot token
const sendMessageToTelegramWhenStoreOpen = async (req, res) => {
  try {
    // const emp = `SELECT EMP_TLGM_CHAT_ID  FROM employee_list WHERE ROLE_ID = ?`;
    // await dbQuery(chatIdList, ["M1"]); dates = DATE_FORMAT(CURDATE(), '%d-%b-%Y') AND
    const store = await dbQuery(
      `SELECT * FROM store_open_close WHERE sts = "1" AND storestatus = "Open" ORDER BY storeopenid DESC LIMIT 1 `
    );

    const emp = await dbQuery(
      `SELECT EMP_TLGM_CHAT_ID  FROM employee_list WHERE ROLE_ID = "M1"`
    );

    //console.log(store);
    //console.log(emp[0]);
    for (let k = 0; k < store.length; k++) {
      // store[k].storename
      var location = `https://www.google.com/maps/search/?api=1&query=${store[k].storelat},${store[k].storelon}`;

      for (let l = 0; l < emp.length; l++) {
        const replyText =
          "Store Name: " +
          store[k].storename +
          "\n" +
          "Opening Time: " +
          store[k].time +
          "\n" +
          "Done By: " +
          store[k].storedopenedby +
          "\n" +
          "Location: " +
          location;

        bot.sendMessage(emp[l].EMP_TLGM_CHAT_ID, replyText);
      }
    }
  } catch (error) {
    catchAsyncError(error);
  }
};

const sendMessageToTelegramWhenStoreClose = async (req, res) => {
  try {
    
    const store = await dbQuery(
      `SELECT * FROM store_open_close WHERE sts = "1" AND storestatus = "Close" ORDER BY storeopenid DESC LIMIT 1`
    );

    const emp = await dbQuery(
      `SELECT EMP_TLGM_CHAT_ID  FROM employee_list WHERE ROLE_ID = "M1"`
    );

    for (let k = 0; k < store.length; k++) {
      // store[k].storename
      // console.log("store[k].storelat", store[k]);
      // console.log("store[k].storelon", store[k]);

      var location = `https://www.google.com/maps/search/?api=1&query=${store[k].storelat},${store[k].storelon}`;

      for (let l = 0; l < emp.length; l++) {
        const replyText =
          "Store Name: " +
          store[k].storename +
          "\n" +
          "Closing Time: " +
          store[k].time +
          "\n" +
          "Done By: " +
          store[k].storedopenedby +
          "\n" +
          "Location: " +
          location;

        bot.sendMessage(emp[l].EMP_TLGM_CHAT_ID, replyText);
      }
    }

    
  } catch (error) {
    catchAsyncError(error);
  }
};

const updateChatId = async (chatId, messageText) => {
  try {
    const chatUpdate = await dbQuery(
      `UPDATE employee_list SET EMP_TLGM_CHAT_ID = ? WHERE Unique_ID = ?`,
      [chatId, messageText]
    );
    return { chatUpdate };
  } catch (error) {
    catchAsyncError(error);
  }
};

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
 

  console.log(chatId);
  const messageText = msg.text;
  console.log(messageText);

  // Check if the message is not a command and reply with an auto-reply
  if (messageText.toLowerCase() === "hi") {
    const replyText = "This is an auto-reply. Thank you for your message!";

    const inlineKeyboard = {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Visit our Website", url: "https://www.google.com/" }],
        ],
      },
    };

    bot.sendMessage(chatId, replyText, inlineKeyboard);
  } else if (messageText === "/start") {
    const replyText = "Welcome to the menu!";

    // Keyboard buttons in a menu format
    const keyboard = {
      reply_markup: {
        keyboard: [
          ["Button 1", "Button 2"],
          ["Button 3", "Button 4"],
        ],
        resize_keyboard: true, // Make the keyboard resizeable
        one_time_keyboard: true, // Hide the keyboard after a button is pressed
      },
    };

    bot.sendMessage(chatId, replyText, keyboard);
  } else if (messageText === "Button 1") {
    const replyText = "You clicked on Button 1!";
    bot.sendMessage(chatId, replyText);
  } else if (messageText === "Button 2") {
    const replyText = "You clicked on Button 2!";
    bot.sendMessage(chatId, replyText);
  } else if (messageText === "Button 3") {
    const replyText = "You clicked on Button 3!";
    bot.sendMessage(chatId, replyText);
  } else if (messageText === "Button 4") {
    const replyText = "You clicked on Button 4!";
    bot.sendMessage(chatId, replyText);
  } else if (messageText.startsWith("EMP")) {
    // const replyText = "You clicked on EMP!";

    updateChatId(chatId, messageText);
    // console.log(object)
    bot.sendMessage(
      chatId,
      `Thank You For Registration! Your chat id is: ${chatId}`
    );
  } else if (messageText.toUpperCase() === "SHOW BUTTONS") {
    const replyText = "Here are some options:";

    // Inline keyboard with buttons
    const keyboard = {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Button 1", callback_data: "button1" }],
          [{ text: "Button 2", callback_data: "button2" }],
          [{ text: "Button 3", callback_data: "button3" }],
        ],
      },
    };

    // Send the message with the buttons
    bot.sendMessage(chatId, replyText, keyboard);
  }

  // if (messageText.)
  // 1st -Handle case sensitive ---------In Javascript-------
  // 2nd - How to send button and url in telegram
  // 3rd - How to set Menu Button in Telegram Bot Api
});
bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;
  console.log(chatId);
  const data = query.data;
  console.log(data);

  // Handle button callbacks
  if (data === "button1") {
    bot.sendMessage(chatId, "You clicked Button 1");
  } else if (data === "button2") {
    bot.sendMessage(chatId, "You clicked Button 2");
  } else if (data === "button3") {
    bot.sendMessage(chatId, "You clicked Button 3");
  }
});

const getStoreData = async (req, res) => {
  try {
    const getstoredata = await dbQuery(`SELECT * FROM store_open_close`);
    res.status(200).send({ data: "getall storedata", getstoredata });
  } catch (error) {
    catchAsyncError(error);
  }
};

module.exports = {
  createStore,
  checkStoreOpen,
  checkStoreIsOpen,
  sendMessageToTelegramWhenStoreOpen,
  sendMessageToTelegramWhenStoreClose,
  getStoreData,
};
