const catchAsyncError = require("../middleware/catchasyncErrors");
const salesService = require("../service/salesService");
const { dbQuery } = require("../config/database");


const createSales = async (req, res) => {
    try {
        const sale = req.body;
        // console.log(sales)
        const result = await salesService.createSales(sale);

        res.status(201).json({ message: result.message });
    } catch (error) {
        // Handle error
        catchAsyncError(error);
    }
};
const getSalesData = async (req, res) => {
    try {

     
        const page = parseInt(req.query.page) || 1; // Get the requested page number or default to 1
        const pageSize = parseInt(req.query.pageSize) || 100; // Get the requested page size or default to 10

        // Calculate the start and end indices for the current page
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const currentDate = new Date();
        console.log(currentDate)
        
        currentDate.setDate(currentDate.getDate());

        formattedDate = currentDate.toISOString().slice(0, 10);
      
        const stockdate = formattedDate
        console.log(stockdate)
     

        const getsaleData = await dbQuery(`SELECT * FROM sales_everyday  LIMIT ? OFFSET ?`, [endIndex, startIndex]);

        console.log(getsaleData)
        res.status(200).send({ data: "getall salesdata", getsaleData });
    } catch (error) {
        catchAsyncError(error);
    }
};

const deleteSalesData = async (req, res) => {
    try {



        const deleteStockData = await dbQuery(`TRUNCATE TABLE sales_everyday`);


        res.status(200).send({ data: "data deleted successfully" });
    } catch (error) {
        catchAsyncError(error);
    }
};



module.exports = { createSales, getSalesData, deleteSalesData }