const express = require("express");

const router = express.Router();

const {
  createStore, checkStoreIsOpen, checkStoreOpen,
  sendMessageToTelegramWhenStoreOpen,
  sendMessageToTelegramWhenStoreClose,getStoreData
} = require("../controller/storeController");

// router.post('/createstore', upload.single('image'), createStore)
router.post("/createstore", createStore);

router.post("/checkstoreopen", checkStoreOpen);
router.get("/checkstoreisopen", checkStoreIsOpen);

router.get("/sendMessageWhenStoreOpen", sendMessageToTelegramWhenStoreOpen);

router.get("/sendMessageWhenStoreClose", sendMessageToTelegramWhenStoreClose);

router.get('/getstoredata', getStoreData)

// router.get('/readMessage', readMessage)

module.exports = router;




// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, '../uploads');
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         const ext = path.extname(file.originalname);
//         cb(null, 'image-' + uniqueSuffix + ext);
//     }
// });

// const upload = multer({ storage: storage });
