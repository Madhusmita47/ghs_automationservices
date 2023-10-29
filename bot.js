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
// //-----------------------------------------------------------
// var currdate = new Date();
// currdate = currdate.toISOString().replace('T', ' ').slice(0, -1);
// console.log(currdate);
// //----------------------------------------------------------------------




// //-----------------------------------------------------------------------

// {
//     "statusCode": 0,
//         "message": "Successfully fetched the interactions list",
//             "data": {
//         "metadata": [
//             {
//                 "total": 348,
//                 "page": 1
//             }
//         ],
//             "data": [
//                 {
//                     "customer": {
//                         "name": "ROMIO PRADHAN",
//                         "phoneNumber": "+918984277496",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64cf786f241c81d990ffb2b4"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "ANUSAYA MALLIK",
//                         "to": "ANUSAYA MALLIK"
//                     },
//                     "createdAt": 1694672369,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not picking"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "+917327072997",
//                         "phoneNumber": "+917327072997",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502a62b629973c01b19e6fa"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SANDHYARANI MISHRA",
//                         "to": "SANDHYARANI MISHRA"
//                     },
//                     "createdAt": 1694672427,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Tulasi Behera",
//                         "phoneNumber": "+918144217871",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64dcbde838725ede2f94400c"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694673398,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not picking"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Satyabhama Nanda",
//                         "phoneNumber": "+919861186577",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64fec0bf31a5c94d82c22dda"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694673462,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         },
//                         {
//                             "name": "When The Customer Will Visit",
//                             "value": 1695616200
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Swarna Prava Mohanty",
//                         "phoneNumber": "+919437696777",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64b4f49cf5ead68d15608797"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694673616,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not picking"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "+918249127125",
//                         "phoneNumber": "+918249127125",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64f31f4e98499bfb217fdccf"
//                     },
//                     "priority": 1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694673681,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not picking"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "+918249127125",
//                         "phoneNumber": "+918249127125",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64f31f4e98499bfb217fdccf"
//                     },
//                     "priority": 1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694673750,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "ANITA PRADHAN PRADHAN",
//                         "phoneNumber": "+919937586449",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64b25c0aabc2a8d5f85bcf61"
//                     },
//                     "priority": 1,
//                     "notes": "will this month last",
//                     "assigned": {
//                         "from": "ANNAPURNA DAS",
//                         "to": "ANNAPURNA DAS"
//                     },
//                     "createdAt": 1694673758,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "ANASUYA MANGARAJ",
//                         "phoneNumber": "+919090175677",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64bfafbfe749c80a744a9c03"
//                     },
//                     "priority": 1,
//                     "notes": "busy",
//                     "assigned": {
//                         "from": "ANNAPURNA DAS",
//                         "to": "ANNAPURNA DAS"
//                     },
//                     "createdAt": 1694673925,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not picking"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "+919437302614",
//                         "phoneNumber": "+919437302614",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64f1e01df8b7db85c11840b9"
//                     },
//                     "priority": -1,
//                     "notes": "incoming not allowed",
//                     "assigned": {
//                         "from": "ANNAPURNA DAS",
//                         "to": "ANNAPURNA DAS"
//                     },
//                     "createdAt": 1694674052,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Other"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Lingaraj Mohanty",
//                         "phoneNumber": "+918249544762",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64fdb8b9da0a493062fd6276"
//                     },
//                     "priority": 1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "BIPIN KUMAR SENAPATI",
//                         "to": "ANNAPURNA DAS"
//                     },
//                     "createdAt": 1694674067,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Walk-In"
//                         },
//                         {
//                             "name": "Customer Type",
//                             "value": "Old"
//                         },
//                         {
//                             "name": "Purchase Type",
//                             "value": [
//                                 "Purchase",
//                                 "GHS Pay"
//                             ]
//                         },
//                         {
//                             "name": "Purchase Amount",
//                             "value": 146380
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "+917327072997",
//                         "phoneNumber": "+917327072997",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502a62b629973c01b19e6fa"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SANDHYARANI MISHRA",
//                         "to": "SANDHYARANI MISHRA"
//                     },
//                     "createdAt": 1694674295,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Swarna Prava Mohanty",
//                         "phoneNumber": "+919437696777",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64b4f49cf5ead68d15608797"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694674331,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "TUHINA SEN",
//                         "phoneNumber": "+919437695806",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64cb599e3e13c78a5921668b"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SANDHYARANI MISHRA",
//                         "to": "SANDHYARANI MISHRA"
//                     },
//                     "createdAt": 1694674392,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "TUHINA SEN",
//                         "phoneNumber": "+919437695806",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64cb599e3e13c78a5921668b"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SANDHYARANI MISHRA",
//                         "to": "SANDHYARANI MISHRA"
//                     },
//                     "createdAt": 1694674797,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         },
//                         {
//                             "name": "Followup For Couldnt Connect",
//                             "value": 1694674795
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "JAGANNATHA PANDA",
//                         "phoneNumber": "+917735897887",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64d3c975641fb41aa7eb1dec"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SANDHYARANI MISHRA",
//                         "to": "SANDHYARANI MISHRA"
//                     },
//                     "createdAt": 1694675029,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         },
//                         {
//                             "name": "When The Customer Will Visit",
//                             "value": 1694676828
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Jully",
//                         "phoneNumber": "+917205323234",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64dbaab366af283270abd204"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SANDHYARANI MISHRA",
//                         "to": "SANDHYARANI MISHRA"
//                     },
//                     "createdAt": 1694675092,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Bhimasen Panda",
//                         "phoneNumber": "+917749812308",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b170418d4b1a1ce5591e"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "ANNAPURNA DAS",
//                         "to": "ANNAPURNA DAS"
//                     },
//                     "createdAt": 1694675312,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Other"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Roji Karna",
//                         "phoneNumber": "+919937450209",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b1a4813c059f9bb2cf94"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "ANNAPURNA DAS",
//                         "to": "ANNAPURNA DAS"
//                     },
//                     "createdAt": 1694675364,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not reachable"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Sulachana Bhoi",
//                         "phoneNumber": "+917205509185",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b1d29d02b04b338b15a5"
//                     },
//                     "priority": -1,
//                     "notes": "incoming not allowed",
//                     "assigned": {
//                         "from": "ANNAPURNA DAS",
//                         "to": "ANNAPURNA DAS"
//                     },
//                     "createdAt": 1694675410,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Other"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Ullash Ranjan Panda",
//                         "phoneNumber": "+919668880608",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64ddf79b38ccabb2b4d02968"
//                     },
//                     "priority": 1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "BIPIN KUMAR SENAPATI",
//                         "to": "SANDHYARANI MISHRA"
//                     },
//                     "createdAt": 1694675424,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Walk-In"
//                         },
//                         {
//                             "name": "Customer Type",
//                             "value": "Old"
//                         },
//                         {
//                             "name": "Purchase Type",
//                             "value": [
//                                 "Purchase",
//                                 "GHS Pay"
//                             ]
//                         },
//                         {
//                             "name": "Purchase Amount",
//                             "value": 10177
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Mama Pradhan",
//                         "phoneNumber": "+918144143278",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b24151c72c21313f8053"
//                     },
//                     "priority": 1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "BIPIN KUMAR SENAPATI",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694675521,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Walk-In"
//                         },
//                         {
//                             "name": "Customer Type",
//                             "value": "Old"
//                         },
//                         {
//                             "name": "Purchase Type",
//                             "value": [
//                                 "Purchase"
//                             ]
//                         },
//                         {
//                             "name": "Purchase Amount",
//                             "value": 16284
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Harihar Sahoo",
//                         "phoneNumber": "+918249738334",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b247b9ac968371e9c101"
//                     },
//                     "priority": -1,
//                     "notes": "will come this month",
//                     "assigned": {
//                         "from": "ANNAPURNA DAS",
//                         "to": "ANNAPURNA DAS"
//                     },
//                     "createdAt": 1694675527,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "+917008338030",
//                         "phoneNumber": "+917008338030",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64b3f3ad326c7fd3b12cd613"
//                     },
//                     "priority": 1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "BIPIN KUMAR SENAPATI",
//                         "to": "SANDHYARANI MISHRA"
//                     },
//                     "createdAt": 1694675594,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Walk-In"
//                         },
//                         {
//                             "name": "Customer Type",
//                             "value": "Old"
//                         },
//                         {
//                             "name": "Purchase Type",
//                             "value": [
//                                 "Purchase"
//                             ]
//                         },
//                         {
//                             "name": "Purchase Amount",
//                             "value": 13593
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Dhirendra Nayak",
//                         "phoneNumber": "+919090750890",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b2b79d02b04b338b190e"
//                     },
//                     "priority": -1,
//                     "notes": "incoming call not allowed",
//                     "assigned": {
//                         "from": "ANNAPURNA DAS",
//                         "to": "ANNAPURNA DAS"
//                     },
//                     "createdAt": 1694675639,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Other"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "alok kumar dash",
//                         "phoneNumber": "+919777000697",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64b29fae9413d04fe9e00571"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SANDHYARANI MISHRA",
//                         "to": "SANDHYARANI MISHRA"
//                     },
//                     "createdAt": 1694675716,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         },
//                         {
//                             "name": "When The Customer Will Visit",
//                             "value": 1694677512
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Siba Mania",
//                         "phoneNumber": "+919692101674",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b337418d4b1a1ce56126"
//                     },
//                     "priority": -1,
//                     "notes": "not interested",
//                     "assigned": {
//                         "from": "ANNAPURNA DAS",
//                         "to": "ANNAPURNA DAS"
//                     },
//                     "createdAt": 1694675767,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Bhagabat Behera",
//                         "phoneNumber": "+919337237602",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b3c8813c059f9bb2d8aa"
//                     },
//                     "priority": -1,
//                     "notes": "said ok",
//                     "assigned": {
//                         "from": "ANNAPURNA DAS",
//                         "to": "ANNAPURNA DAS"
//                     },
//                     "createdAt": 1694675912,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "+919861158176",
//                         "phoneNumber": "+919861158176",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b3e851c72c21313f8807"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SUJATA BARIK",
//                         "to": "SUJATA BARIK"
//                     },
//                     "createdAt": 1694675944,
//                     "userFields": [
//                         {
//                             "name": "Remarks",
//                             "value": "will say  I m bz"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Mamata Patra",
//                         "phoneNumber": "+919237060546",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b4666d0060edd42c4cfc"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694676070,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not picking"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "ALIBHA MOHANTY",
//                         "phoneNumber": "+919439300298",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64cbb13b899af79bcc6e265a"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SUMITRA PRADHAN",
//                         "to": "SUMITRA PRADHAN"
//                     },
//                     "createdAt": 1694676083,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not reachable"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "+919777805948",
//                         "phoneNumber": "+919777805948",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b48d3b0f82523d60329b"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SUJATA BARIK",
//                         "to": "SUJATA BARIK"
//                     },
//                     "createdAt": 1694676109,
//                     "userFields": [
//                         {
//                             "name": "Remarks",
//                             "value": "not interested to talk"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Anita Badra",
//                         "phoneNumber": "+917377012602",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b49c6d0060edd42c4dfe"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694676124,
//                     "userFields": [
//                         {
//                             "name": "Remarks",
//                             "value": "decline the call"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "No"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "CHINMAYA MISHRA",
//                         "phoneNumber": "+918446870279",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64d218db8b07a3ba9acd3f20"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SANDHYARANI MISHRA",
//                         "to": "SANDHYARANI MISHRA"
//                     },
//                     "createdAt": 1694676170,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Debaki Naik",
//                         "phoneNumber": "+919348334553",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b4ec3b0f82523d603419"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694676204,
//                     "userFields": [
//                         {
//                             "name": "Remarks",
//                             "value": "not interested"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "No"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "+917504709220",
//                         "phoneNumber": "+917504709220",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b5a09d02b04b338b24e8"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SUJATA BARIK",
//                         "to": "SUJATA BARIK"
//                     },
//                     "createdAt": 1694676384,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Switched Off"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Manu Barik",
//                         "phoneNumber": "+917853899486",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b5a29d02b04b338b24ef"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694676386,
//                     "userFields": [
//                         {
//                             "name": "Remarks",
//                             "value": "ghare discuss kari kahibe"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Jully",
//                         "phoneNumber": "+917205323234",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64dbaab366af283270abd204"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SANDHYARANI MISHRA",
//                         "to": "SANDHYARANI MISHRA"
//                     },
//                     "createdAt": 1694676405,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         },
//                         {
//                             "name": "When The Customer Will Visit",
//                             "value": 1694678202
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Satyanarayan Subudhi",
//                         "phoneNumber": "+919937382809",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b6039d02b04b338b2695"
//                     },
//                     "priority": -1,
//                     "notes": "will be tomorrow, earring",
//                     "assigned": {
//                         "from": "ANUSAYA MALLIK",
//                         "to": "ANUSAYA MALLIK"
//                     },
//                     "createdAt": 1694676483,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "CHANDRAKANTA PRADHAN",
//                         "phoneNumber": "+918754182901",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64cfa367e50766420dbdc937"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SANDHYARANI MISHRA",
//                         "to": "SANDHYARANI MISHRA"
//                     },
//                     "createdAt": 1694676541,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         },
//                         {
//                             "name": "Followup For Couldnt Connect",
//                             "value": 1694370600
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Rajashree Sahoo",
//                         "phoneNumber": "+917008740870",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b6559d02b04b338b2860"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "ANUSAYA MALLIK",
//                         "to": "ANUSAYA MALLIK"
//                     },
//                     "createdAt": 1694676565,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not picking"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Vikram Mohanty",
//                         "phoneNumber": "+918875167130",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b689b9ac968371e9cceb"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694676617,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not reachable"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "+919437092889",
//                         "phoneNumber": "+919437092889",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6501a4602efb11c0ad324842"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SUMITRA PRADHAN",
//                         "to": "SUMITRA PRADHAN"
//                     },
//                     "createdAt": 1694676625,
//                     "userFields": [
//                         {
//                             "name": "Remarks",
//                             "value": "Will Visit"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "+917381888881",
//                         "phoneNumber": "+917381888881",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b6b4b9ac968371e9cde9"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SUJATA BARIK",
//                         "to": "SUJATA BARIK"
//                     },
//                     "createdAt": 1694676660,
//                     "userFields": [
//                         {
//                             "name": "Remarks",
//                             "value": "meeting in office"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Laxmi Dash",
//                         "phoneNumber": "+918249983051",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b6de418d4b1a1ce56e5a"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694676702,
//                     "userFields": [
//                         {
//                             "name": "Remarks",
//                             "value": "will visit"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "A M PATTANAYAK",
//                         "phoneNumber": "+919937697352",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64e8b9986a532762b001eeeb"
//                     },
//                     "priority": -1,
//                     "notes": "month last will be",
//                     "assigned": {
//                         "from": "ANUSAYA MALLIK",
//                         "to": "ANUSAYA MALLIK"
//                     },
//                     "createdAt": 1694676717,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Premasila Mohapatra",
//                         "phoneNumber": "+918260054521",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b6f8b9ac968371e9cedd"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694676728,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not picking"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "PUSPAMANJARI MOHANTY",
//                         "phoneNumber": "+918327783416",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64d37e79986fc35baeabadd3"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SUJATA BARIK",
//                         "to": "SUJATA BARIK"
//                     },
//                     "createdAt": 1694676755,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "+919861321429",
//                         "phoneNumber": "+919861321429",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64cca210ee6210eefe2929e6"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SUMITRA PRADHAN",
//                         "to": "SUMITRA PRADHAN"
//                     },
//                     "createdAt": 1694676771,
//                     "userFields": [
//                         {
//                             "name": "Remarks",
//                             "value": "GHS Pyment Remained Call"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "BIJAYALXMI BADAJENA",
//                         "phoneNumber": "+919437506958",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64de0bf65a6528be34a5f0f8"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SUJATA BARIK",
//                         "to": "SUJATA BARIK"
//                     },
//                     "createdAt": 1694676807,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Krushna Priya Mishra",
//                         "phoneNumber": "+917008691010",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b754813c059f9bb2e448"
//                     },
//                     "priority": -1,
//                     "notes": "out of puri",
//                     "assigned": {
//                         "from": "ANUSAYA MALLIK",
//                         "to": "ANUSAYA MALLIK"
//                     },
//                     "createdAt": 1694676820,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "No"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "MAYANKA VERMA",
//                         "phoneNumber": "+918252556996",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64d2074592f8fc02b68a4900"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "ANUSAYA MALLIK",
//                         "to": "ANUSAYA MALLIK"
//                     },
//                     "createdAt": 1694676899,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not picking"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Trinath Charan Panda",
//                         "phoneNumber": "+919178709429",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b7ab418d4b1a1ce56ff2"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694676907,
//                     "userFields": [
//                         {
//                             "name": "Remarks",
//                             "value": "will visit"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Susama Bhatta",
//                         "phoneNumber": "+917853886286",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b7ea813c059f9bb2e5f9"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694676970,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not picking"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Krushna Chandra Senapati",
//                         "phoneNumber": "+917978286311",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64f5bd3ed1b6cdebcb9e8d90"
//                     },
//                     "priority": -1,
//                     "notes": "said ok",
//                     "assigned": {
//                         "from": "ANUSAYA MALLIK",
//                         "to": "ANUSAYA MALLIK"
//                     },
//                     "createdAt": 1694677015,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "No"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Laxmipriya Behera",
//                         "phoneNumber": "+917873149415",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b820418d4b1a1ce5721e"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694677024,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not picking"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "+918847834221",
//                         "phoneNumber": "+918847834221",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b851b9ac968371e9d39d"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "ANUSAYA MALLIK",
//                         "to": "ANUSAYA MALLIK"
//                     },
//                     "createdAt": 1694677073,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not reachable"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Sukanti Behera",
//                         "phoneNumber": "+919777773721",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b8846d0060edd42c5ab6"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694677124,
//                     "userFields": [
//                         {
//                             "name": "Remarks",
//                             "value": "will visit tomorrow"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Rajani Sahoo",
//                         "phoneNumber": "+919861343346",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502b8c5813c059f9bb2e75c"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694677189,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not picking"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "SATYAM",
//                         "phoneNumber": "+919839519710",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64dfa8113517e77ab9d552c6"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SANDHYARANI MISHRA",
//                         "to": "SANDHYARANI MISHRA"
//                     },
//                     "createdAt": 1694677311,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         },
//                         {
//                             "name": "When The Customer Will Visit",
//                             "value": 1694679108
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "+916370494551",
//                         "phoneNumber": "+916370494551",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64f47d193ac70a9c6ce81108"
//                     },
//                     "priority": -1,
//                     "notes": "will be visit dashera",
//                     "assigned": {
//                         "from": "ANUSAYA MALLIK",
//                         "to": "ANUSAYA MALLIK"
//                     },
//                     "createdAt": 1694677373,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "+918555057126",
//                         "phoneNumber": "+918555057126",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502ba3a3b0f82523d6049b1"
//                     },
//                     "priority": -1,
//                     "notes": "Will Visit & Purchase Chain",
//                     "assigned": {
//                         "from": "SUMITRA PRADHAN",
//                         "to": "SUMITRA PRADHAN"
//                     },
//                     "createdAt": 1694677562,
//                     "userFields": [
//                         {
//                             "name": "Remarks",
//                             "value": "Will Visit & Purchase Chain"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         },
//                         {
//                             "name": "When The Customer Will Visit",
//                             "value": 1695191400
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Gayatri",
//                         "phoneNumber": "+919692484275",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64dce86777328c1073badd02"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SANDHYARANI MISHRA",
//                         "to": "SANDHYARANI MISHRA"
//                     },
//                     "createdAt": 1694677697,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         },
//                         {
//                             "name": "When The Customer Will Visit",
//                             "value": 1694679495
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Babita Mohapatra",
//                         "phoneNumber": "+919861014295",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502baede648486ab482bae0"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694677741,
//                     "userFields": [
//                         {
//                             "name": "Remarks",
//                             "value": "will visit monday"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         },
//                         {
//                             "name": "When The Customer Will Visit",
//                             "value": 1695011400
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "RANJITA MISHRA",
//                         "phoneNumber": "+918249045501",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64d3c985641fb41aa7eb1e11"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "ANNAPURNA DAS",
//                         "to": "ANNAPURNA DAS"
//                     },
//                     "createdAt": 1694677748,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not picking"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Durga Madhab Mohanty",
//                         "phoneNumber": "+919040119978",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502bb00e648486ab482bb3c"
//                     },
//                     "priority": -1,
//                     "notes": "Will Visit",
//                     "assigned": {
//                         "from": "SUMITRA PRADHAN",
//                         "to": "SUMITRA PRADHAN"
//                     },
//                     "createdAt": 1694677760,
//                     "userFields": [
//                         {
//                             "name": "Remarks",
//                             "value": "Will Visit"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Prasanna Kumar",
//                         "phoneNumber": "+917377441021",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64dce9b777328c1073badd8f"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SANDHYARANI MISHRA",
//                         "to": "SANDHYARANI MISHRA"
//                     },
//                     "createdAt": 1694677773,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "MAMALI PATRA",
//                         "phoneNumber": "+917008467880",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64ce5158221f3b42db472d98"
//                     },
//                     "priority": -1,
//                     "notes": "ghs payment",
//                     "assigned": {
//                         "from": "ANUSAYA MALLIK",
//                         "to": "ANUSAYA MALLIK"
//                     },
//                     "createdAt": 1694677795,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "No"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Dipa",
//                         "phoneNumber": "+917008366307",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64dce920ba7d01e7ea982b37"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SANDHYARANI MISHRA",
//                         "to": "SANDHYARANI MISHRA"
//                     },
//                     "createdAt": 1694677829,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "BISHNUPRIYA PRADHAN",
//                         "phoneNumber": "+917978650715",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64ca181125e040cb113e648a"
//                     },
//                     "priority": -1,
//                     "notes": "will come few days",
//                     "assigned": {
//                         "from": "ANNAPURNA DAS",
//                         "to": "ANNAPURNA DAS"
//                     },
//                     "createdAt": 1694677899,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "+919348436165",
//                         "phoneNumber": "+919348436165",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64eb06bb0fcf2e2948aa5373"
//                     },
//                     "priority": -1,
//                     "notes": "Will Visit",
//                     "assigned": {
//                         "from": "SUMITRA PRADHAN",
//                         "to": "SUMITRA PRADHAN"
//                     },
//                     "createdAt": 1694677902,
//                     "userFields": [
//                         {
//                             "name": "Remarks",
//                             "value": "Will Visit"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "ABHIRAM MOHANTY",
//                         "phoneNumber": "+919861092197",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64cb665e26ee7ad8220d486a"
//                     },
//                     "priority": -1,
//                     "notes": "ghs payment",
//                     "assigned": {
//                         "from": "ANUSAYA MALLIK",
//                         "to": "ANUSAYA MALLIK"
//                     },
//                     "createdAt": 1694677978,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "No"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Falguni parija PARIJA",
//                         "phoneNumber": "+917008057354",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64e1cc8fa471ada47d1cc71b"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SUMITRA PRADHAN",
//                         "to": "SUMITRA PRADHAN"
//                     },
//                     "createdAt": 1694678037,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not picking"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Silka Prusty",
//                         "phoneNumber": "+918917672640",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502bc2f6d0060edd42c66b8"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694678063,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Switched Off"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "BISHNU PRASAD PRADHAN",
//                         "phoneNumber": "+919438007602",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64d38a1ad3216256d07b0131"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "ANNAPURNA DAS",
//                         "to": "ANNAPURNA DAS"
//                     },
//                     "createdAt": 1694678089,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not picking"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Ganga Dhara PujaPanda",
//                         "phoneNumber": "+919861272984",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502bc5df7b1784862e8dc1d"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SUMITRA PRADHAN",
//                         "to": "SUMITRA PRADHAN"
//                     },
//                     "createdAt": 1694678109,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not picking"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Urmila Sathua",
//                         "phoneNumber": "+919853346274",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502bc6e6d0060edd42c67c8"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694678126,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not picking"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "GITANJALI MISHRA",
//                         "phoneNumber": "+918480702616",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64e75c600cb6e39f37e71c0d"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SUMITRA PRADHAN",
//                         "to": "SUMITRA PRADHAN"
//                     },
//                     "createdAt": 1694678134,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Switched Off"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "RABINARAYAN MOHAPATRA",
//                         "phoneNumber": "+919658108151",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64d0d66cdca936875af051a5"
//                     },
//                     "priority": -1,
//                     "notes": "said ok for payment tomorrow",
//                     "assigned": {
//                         "from": "ANNAPURNA DAS",
//                         "to": "ANNAPURNA DAS"
//                     },
//                     "createdAt": 1694678210,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "SYED WAZAD ALLI",
//                         "phoneNumber": "+917847007742",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64d5d3c2cb622e7addf8bc32"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "ANNAPURNA DAS",
//                         "to": "ANNAPURNA DAS"
//                     },
//                     "createdAt": 1694678304,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not picking"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "ANIL KUMAR SAHOO",
//                         "phoneNumber": "+918249085218",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64b3f03d1d2bbc25de4e69e2"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694678308,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "K. BISWANATH PATRA PATRA",
//                         "phoneNumber": "+917008546791",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64d333460a33c713b0ae0dd3"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694678417,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Laxmipriya Sahoo",
//                         "phoneNumber": "+919348820767",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502bd94e648486ab482c2ba"
//                     },
//                     "priority": -1,
//                     "notes": "said ok",
//                     "assigned": {
//                         "from": "ANNAPURNA DAS",
//                         "to": "ANNAPURNA DAS"
//                     },
//                     "createdAt": 1694678420,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Prafulla Kumar Nayak",
//                         "phoneNumber": "+919776322248",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502bd9f418d4b1a1ce58273"
//                     },
//                     "priority": -1,
//                     "notes": "out of puri",
//                     "assigned": {
//                         "from": "ANUSAYA MALLIK",
//                         "to": "ANUSAYA MALLIK"
//                     },
//                     "createdAt": 1694678431,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "No"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "SUDHAKAR PRADHAN",
//                         "phoneNumber": "+919861017005",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64d3386b0a33c713b0ae1f3c"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694678585,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "+919938710532",
//                         "phoneNumber": "+919938710532",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64d0def011693164a6f21092"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694678638,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not reachable"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Gadadhar  Somanath Biswal",
//                         "phoneNumber": "+918249433132",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502be87f7d841c8c2fdc57b"
//                     },
//                     "priority": -1,
//                     "notes": "not interested",
//                     "assigned": {
//                         "from": "ANUSAYA MALLIK",
//                         "to": "ANUSAYA MALLIK"
//                     },
//                     "createdAt": 1694678663,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "No"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Gadadhar Sahoo",
//                         "phoneNumber": "+919668138296",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502bebb3b0f82523d605646"
//                     },
//                     "priority": -1,
//                     "notes": "said ok",
//                     "assigned": {
//                         "from": "ANNAPURNA DAS",
//                         "to": "ANNAPURNA DAS"
//                     },
//                     "createdAt": 1694678715,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Joysukhlal CHAWDA",
//                         "phoneNumber": "+919437009059",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64d09fa185f31ec22eff07b4"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694678743,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "GOURIMANI DAS",
//                         "phoneNumber": "+919040463070",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64d0932a3d1152c94b439f3e"
//                     },
//                     "priority": -1,
//                     "notes": "Will Visit",
//                     "assigned": {
//                         "from": "SUMITRA PRADHAN",
//                         "to": "SUMITRA PRADHAN"
//                     },
//                     "createdAt": 1694678821,
//                     "userFields": [
//                         {
//                             "name": "Remarks",
//                             "value": "Will Visit"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         },
//                         {
//                             "name": "When The Customer Will Visit",
//                             "value": 1695191400
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Anupama Mohanty",
//                         "phoneNumber": "+919861137603",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "6502bf52e648486ab482c792"
//                     },
//                     "priority": -1,
//                     "notes": "not interested",
//                     "assigned": {
//                         "from": "ANNAPURNA DAS",
//                         "to": "ANNAPURNA DAS"
//                     },
//                     "createdAt": 1694678866,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "SIBENDRA BEJA",
//                         "phoneNumber": "+919861515163",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64d3c989641fb41aa7eb1e1a"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694679005,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not picking"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Baidyanath",
//                         "phoneNumber": "+917978064494",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64de52466df66fabd2d503cf"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SANDHYARANI MISHRA",
//                         "to": "SANDHYARANI MISHRA"
//                     },
//                     "createdAt": 1694679199,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "SATYANARAYAN BHANJADEO",
//                         "phoneNumber": "+919337150725",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64f2fa975c8a9e16fe595d33"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694679221,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not picking"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "Bulu",
//                         "phoneNumber": "+919658802683",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64de50d26df66fabd2d50360"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SANDHYARANI MISHRA",
//                         "to": "SANDHYARANI MISHRA"
//                     },
//                     "createdAt": 1694679234,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "+917080900941",
//                         "phoneNumber": "+917080900941",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64f2fb20cf6cec9f62e8ab3b"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "Rasmita Panda",
//                         "to": "Rasmita Panda"
//                     },
//                     "createdAt": 1694679289,
//                     "userFields": [
//                         {
//                             "name": "Could Not Connect Reason",
//                             "value": "Not picking"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Could Not Connect"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "BIGNESH PATRA",
//                         "phoneNumber": "+919861074430",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64e8a973fe892a5490ffb462"
//                     },
//                     "priority": -1,
//                     "notes": "said ok",
//                     "assigned": {
//                         "from": "ANUSAYA MALLIK",
//                         "to": "ANUSAYA MALLIK"
//                     },
//                     "createdAt": 1694679294,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "No"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "MANISH MISHRA",
//                         "phoneNumber": "+918917288278",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64de51d26df66fabd2d503a6"
//                     },
//                     "priority": -1,
//                     "notes": null,
//                     "assigned": {
//                         "from": "SANDHYARANI MISHRA",
//                         "to": "SANDHYARANI MISHRA"
//                     },
//                     "createdAt": 1694679349,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         },
//                         {
//                             "name": "When The Customer Will Visit",
//                             "value": 1694681148
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "GYANA RANJAN PRADHAN",
//                         "phoneNumber": "+918917448042",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64ce4966221f3b42db47245b"
//                     },
//                     "priority": -1,
//                     "notes": "Will Visit when Get free",
//                     "assigned": {
//                         "from": "SUMITRA PRADHAN",
//                         "to": "SUMITRA PRADHAN"
//                     },
//                     "createdAt": 1694679398,
//                     "userFields": [
//                         {
//                             "name": "Remarks",
//                             "value": "Will Visit when Get free"
//                         },
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         }
//                     ]
//                 },
//                 {
//                     "customer": {
//                         "name": "SSRADHANJALI SENAPATI",
//                         "phoneNumber": "+919348127569",
//                         "email": null,
//                         "company": {
//                             "name": null,
//                             "address": {
//                                 "street": null,
//                                 "city": null,
//                                 "state": null,
//                                 "country": "India",
//                                 "pincode": null
//                             },
//                             "kdm": null
//                         },
//                         "id": "64e8a6f16a532762b001d6e5"
//                     },
//                     "priority": -1,
//                     "notes": "interested to visit",
//                     "assigned": {
//                         "from": "ANUSAYA MALLIK",
//                         "to": "ANUSAYA MALLIK"
//                     },
//                     "createdAt": 1694679651,
//                     "userFields": [
//                         {
//                             "name": "Status",
//                             "value": "Connected"
//                         },
//                         {
//                             "name": "Will Customer Visit",
//                             "value": "Yes"
//                         }
//                     ]
//                 }
//             ]
//     }
// }