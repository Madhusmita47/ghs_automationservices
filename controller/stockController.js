const catchAsyncError = require("../middleware/catchasyncErrors");
const stockService = require("../service/stockService");
const { dbQuery } = require("../config/database");


const createStock = async (req, res) => {
    try {
        const stock = req.body;
        // console.log(stock)
        const result = await stockService.createStock(stock);

        res.status(201).json({ message: result.message });
    } catch (error) {
        // Handle error
        catchAsyncError(error);
    }
};
const getStockData = async (req, res) => {
    try {

        // const data = req.body.url
        const page = parseInt(req.query.page) || 1; // Get the requested page number or default to 1
     const pageSize = parseInt(req.query.pageSize) || 100; // Get the requested page size or default to 10

  // Calculate the start and end indices for the current page
      const startIndex = (page - 1) * pageSize;
       const endIndex = startIndex + pageSize;
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate());

        formattedDate = currentDate.toISOString().slice(0, 10);
        // console.log(formattedDate)
        const stockdate = formattedDate
        console.log(stockdate)
        //   `SELECT DISTINCT(storename) FROM store_open_close WHERE sts = ?`,
        //     [salesdate, endIndex, startIndex]

        const getstockData = await dbQuery(`SELECT * FROM stock_everyday WHERE sales_crtn_dt = ? LIMIT ? OFFSET ?`, [stockdate, endIndex, startIndex]);

        // console.log(getsalesData)
        res.status(200).send({ data: "getall salesdata", getstockData });
    } catch (error) {
        catchAsyncError(error);
    }
};

const deleteStockData = async (req, res) => {
    try {

       

        const deleteStockData = await dbQuery(`TRUNCATE TABLE stock_everyday`);

       
        res.status(200).send({ data: "data deleted successfully"});
    } catch (error) {
        catchAsyncError(error);
    }
};


module.exports = { createStock, getStockData, deleteStockData }