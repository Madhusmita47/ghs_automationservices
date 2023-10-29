const catchAsyncError = require("../middleware/catchasyncErrors");
const { dbQuery } = require("../config/database");

const createStock = async (stock) => {
    try {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate());

        formattedDate = currentDate.toISOString().slice(0, 10);
        // console.log(formattedDate)
     
        for (let i = 0; i < stock.stockData.length;i++){

        const query = `
           INSERT INTO stock_everyday ( Locationcode,Description,ProductDescription,Itemcode,LotNumber,Bincode,Unitweight,Quantity,
    PricingType,CFAProductCode,StockValue,ComplexityCode,CollectionName,IsHallMarking,sales_crtn_dt)
            VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)
            `;
    
        await dbQuery(query, [
            stock.stockData[i].Locationcode,
            stock.stockData[i].Description,
            stock.stockData[i].ProductDescription,
            stock.stockData[i].Itemcode,
            stock.stockData[i].LotNumber,
            stock.stockData[i].Bincode,
            stock.stockData[i].Unitweight,
            stock.stockData[i].Quantity,
            stock.stockData[i].PricingType,
            stock.stockData[i].CFAProductCode,
            stock.stockData[i].StockValue,
            stock.stockData[i].ComplexityCode,
            stock.stockData[i].CollectionName,
            stock.stockData[i].IsHallMarking,
            formattedDate

        ]);

        }


        return { message: "data Inserted Successfully" };
    } catch (error) {
        // Handle error
        catchAsyncError(error);
    }
};





module.exports = { createStock }

//  Locationcode,
//     Description,
//     ProductDescription,
//     Itemcode, LotNumber,
//     Bincode,
//     Unitweight,
//     Quantity,
//     PricingType,
//     CFAProductCode,
//     StockValue,
//     ComplexityCode,
//     CollectionName,
//     IsHallMarking