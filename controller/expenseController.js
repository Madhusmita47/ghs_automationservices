const catchAsyncError = require("../middleware/catchasyncErrors");
const expenseService = require("../service/expenseService");
const { dbQuery} = require("../config/database");
const info = require("../config/test")
//-------------------------------------------------------------------
const TelegramBot = require("node-telegram-bot-api");
const botToken = info.BOT_TOKEN;
const bot = new TelegramBot(botToken, { polling: true });

const createexpense = async (req, res) => {
  try {
    const expense = req.body;
    // console.log(expense)
    const result = await expenseService.createexpense(expense);
    sendMessageToTelegramForApproval(expense);
    res.status(201).json({ message: result.message });
  } catch (error) {
    // Handle error
    catchAsyncError(error);
  }
};
const getexpenseData = async (req, res) => {
  try {
    const getexpenseData = await dbQuery(
      `SELECT * FROM expense_list WHERE exp_sts = '1' AND exp_approved = '1'`
    );
    res.status(200).send({ data: "getall expensedata", getexpenseData });
  } catch (error) {
    catchAsyncError(error);
  }
};

const sendMessageToTelegramForApproval = async (expense) => {
  try {
    var chatId = info.MANOJ_CHATID;

    if (expense.approvalstate == "2") {
      chatId = info.MANOJ_CHATID;
    } else if (expense.approvalstate == "1") {
      chatId = info.MADHUSMITA_CHATID;
    }

    // var chatId = "908505724";

    // if (expense.approvalstate === "2") {
    //   chatId = "6646068187";
    // } else if (expense.approvalstate === "1") {
    //   chatId = "908505724";
    // }

    const replyText =
      expense.ExpID +
      " New Expense for " +
      expense.Vertical +
      " for " +
      expense.date +
      " by " +
      expense.person +
      " Payment for Expense requested from " +
      expense.from +
      " to " +
      expense.to +
      " of amount " +
      expense.amountincludinggst +
      " including GST of " +
      expense.GSTAmount +
      " Expense type: " +
      expense.LedgerName +
      "\n" +
      "\n" +
      expense.ExpenseDiscription +
      "\n" +
      "\n" +
      " Please Approve or Decline the request.";

    const keyboard = {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Approve", callback_data: "approve" + expense.ExpID }],
          [{ text: "Decline", callback_data: "decline" + expense.ExpID }],
        ],
      },
    };

    bot.sendMessage(chatId, replyText, keyboard);
  } catch (error) {
    catchAsyncError(error);
  }
};

bot.on("callback_query", async (query) => {
  const chatId = query.message.chat.id;
  // console.log(chatId);
  const data = query.data;
  //console.log("data", data);
  // console.log("chatId", chatId);
  // [{ text: "Approve", callback_data: "approve" + expense.ExpID }]
  // Handle button callbacks
  if (data.startsWith("approve")) {
    const part = data.split("approve");
    const expenseDetail = await dbQuery(
      `SELECT * FROM expense_list WHERE exp_ExpID = '${part[1]}'`
    );

    const replyText =
      expenseDetail[0].exp_ExpID +
      " New Expense for " +
      expenseDetail[0].exp_Vertical +
      " for " +
      expenseDetail[0].exp_date +
      " by " +
      expenseDetail[0].exp_person +
      " Payment for Expense requested from " +
      expenseDetail[0].exp_from +
      " to " +
      expenseDetail[0].exp_to +
      " of amount " +
      expenseDetail[0].exp_amountincludinggst +
      " including GST of " +
      expenseDetail[0].exp_GSTAmount +
      " Expense type: " +
      expenseDetail[0].exp_LedgerName +
      "\n" +
      "\n" +
      expenseDetail[0].exp_ExpenseDiscription +
      "\n" +
      "\n";
    //  console.log("expenseDetail[0].exp_updated: ", expenseDetail[0].exp_updated);

    if (expenseDetail[0].exp_updated == "0") {
      const requesterEmpId = expenseDetail[0].exp_person.split(" ");
      const updateDetail = await dbQuery(
        `UPDATE expense_list set exp_approved = "1", exp_updated = "1" WHERE exp_ExpID = '${part[1]}'`
      );

      //console.log("requesterEmpId[0]: ", requesterEmpId[0]);
      const requesterDetail = await dbQuery(
        `SELECT * FROM employee_list WHERE Unique_ID = '${requesterEmpId[0]}'`
      );

      //   console.log(
      //     "requesterDetail.EMP_TLGM_CHAT_ID:  ",
      //     requesterDetail[0].EMP_TLGM_CHAT_ID
      //   );
      bot.sendMessage(chatId, "Thank you for approval of " + part[1]);
      bot.sendMessage(
        requesterDetail[0].EMP_TLGM_CHAT_ID,
        replyText + "This request has been Approved!!!"
      );
    } else if (
      expenseDetail[0].exp_updated == "1" &&
      expenseDetail[0].exp_approved == "0"
    ) {
      bot.sendMessage(
        chatId,
        "You have already Declined this request: " + part[1]
      );
    } else if (
      expenseDetail[0].exp_updated == "1" &&
      expenseDetail[0].exp_approved == "1"
    ) {
      bot.sendMessage(
        chatId,
        "You have already Approved this request: " + part[1]
      );
    }

    // bot.sendMessage(
    //   chatId,
    //   "You have already Approved this request: " + part[1]
    // );
    // console.log("approveid",part[1])
  } else if (data.startsWith("decline")) {
    const part = data.split("decline");
    const expenseDetail = await dbQuery(
      `SELECT * FROM expense_list WHERE exp_ExpID = '${part[1]}'`
    );

    const replyText =
      expenseDetail[0].exp_ExpID +
      " New Expense for " +
      expenseDetail[0].exp_Vertical +
      " for " +
      expenseDetail[0].exp_date +
      " by " +
      expenseDetail[0].exp_person +
      " Payment for Expense requested from " +
      expenseDetail[0].exp_from +
      " to " +
      expenseDetail[0].exp_to +
      " of amount " +
      expenseDetail[0].exp_amountincludinggst +
      " including GST of " +
      expenseDetail[0].exp_GSTAmount +
      " Expense type: " +
      expenseDetail[0].exp_LedgerName +
      "\n" +
      "\n" +
      expenseDetail[0].exp_ExpenseDiscription +
      "\n" +
      "\n";
    if (expenseDetail[0].exp_updated == "0") {
      const requesterEmpId = expenseDetail[0].exp_person.split(" ");
      const updateDetail = await dbQuery(
        `UPDATE expense_list set exp_approved = "0", exp_updated = "1" WHERE exp_ExpID = '${part[1]}'`
      );

      const requesterDetail = await dbQuery(
        `SELECT * FROM employee_list WHERE 	Unique_ID = '${requesterEmpId[0]}'`
      );

      bot.sendMessage(chatId, "Request: " + part[1] + " has been declined");
      bot.sendMessage(
        requesterDetail[0].EMP_TLGM_CHAT_ID,
        replyText + "This request has been Declined!!!"
      );
    } else if (
      expenseDetail[0].exp_updated == "1" &&
      expenseDetail[0].exp_approved == "0"
    ) {
      bot.sendMessage(
        chatId,
        "You have already Declined this request: " + part[1]
      );
    } else if (
      expenseDetail[0].exp_updated == "1" &&
      expenseDetail[0].exp_approved == "1"
    ) {
      bot.sendMessage(
        chatId,
        "You have already Approved this request: " + part[1]
      );
    }
  }
});

module.exports = {
  createexpense,
  getexpenseData,
  sendMessageToTelegramForApproval,
};
