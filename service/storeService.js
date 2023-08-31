const catchAsyncError = require("../middleware/catchasyncErrors");
const { dbQuery } = require("../config/database");

const createStore = async (store) => {
  try {
    const query = `
           INSERT INTO store_open_close (storename,storestatus,dates,time,storedopenedby, storelat, storelon, storeloc)
            VALUES(?, ?, ?, ?, ?, ?, ?, ?)
            `;
    await dbQuery(query, [
      store.storename,
      store.storestatus,
      store.dates,
      store.time,
      store.storedopenedby,
      store.storelat,
      store.storelon,
      store.storeloc,
    ]);

    return { message: "Storedata Inserted Successfully" };
  } catch (error) {
    // Handle error
    catchAsyncError(error);
  }
};

const checkStoreIsOpen = async (storename) => {
  try {
    //2023-08-14
    const data = await dbQuery(
      `SELECT * FROM store_open_close WHERE dates = DATE_FORMAT(CURDATE(), '%d-%b-%Y') AND storestatus = "Open" AND storename = ?`,
      [storename]
    );

    var storeNotOpen = false;
    if (!data.length > 0) {
      storeNotOpen = true;
    }

    // console.log("storeNotOpen", storeNotOpen);
    // console.log("data", data);
    return storeNotOpen;
  } catch (error) {
    catchAsyncError(error);
  }
};

const storeNameList = async () => {
  try {
    const data = await dbQuery(
      `SELECT DISTINCT(storename) FROM store_open_close WHERE sts = ?`,
      ["1"]
    );

    return data;
  } catch (error) {
    catchAsyncError(error);
  }
};

module.exports = { createStore, checkStoreIsOpen, storeNameList };
