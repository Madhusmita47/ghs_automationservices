const catchAsyncError = require("../middleware/catchasyncErrors");
const { dbQuery } = require("../config/database");

const createSales = async (sale) => {
    try {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate());

        formattedDate = currentDate.toISOString().slice(0, 10);
        console.log(formattedDate)

        for (let i = 0; i < sale.saleData.length; i++) {

            const query = 
           `INSERT INTO sales_everyday ( Mode,LocationCode,DocDate,Description ,ProductDescription,ItemCode,Quantity,Weight,TotalValue,LotNumber,PricingType,BinCode,goldrate,Age,RSOname,ThemeDesign,DiscountCode,InvoiceNo,title,CustomerName,Mobileno,GSTRegno,Fineness,ishallmarking, HallmarkingChargesPERqty,hallmarkqty, HMcharges,HMGSTPercent,HMGSTValue,TotalHMcharges,isfoc,HMExcludedGms,Totcategory,upload_date)
            VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
            ;

            await dbQuery(query, [
                sale.saleData[i].Mode,
                sale.saleData[i].LocationCode,
    sale.saleData[i].DocDate,
    sale.saleData[i].Description ,  
    sale.saleData[i].ProductDescription,
    sale.saleData[i].ItemCode,
    sale.saleData[i].Quantity,
    sale.saleData[i].Weight,
    sale.saleData[i].TotalValue,
    sale.saleData[i].LotNumber,
   sale.saleData[i].PricingType,
    sale.saleData[i].BinCode,
    sale.saleData[i].goldrate,
    sale.saleData[i].Age,
    sale.saleData[i].RSOname,
    sale.saleData[i].ThemeDesign,
   sale.saleData[i].DiscountCode,
    sale.saleData[i].InvoiceNo,
    sale.saleData[i].title,
    sale.saleData[i].CustomerName,
    sale.saleData[i].Mobileno,
   sale.saleData[i].GSTRegno,
   sale.saleData[i].Fineness,
   sale.saleData[i].ishallmarking,
   sale.saleData[i].HallmarkingChargesPERqty,
   sale.saleData[i].hallmarkqty,
   sale.saleData[i].HMcharges,
    sale.saleData[i].HMGSTPercent,
   sale.saleData[i].HMGSTValue,
   sale.saleData[i].TotalHMcharges,
   sale.saleData[i].isfoc,
   sale.saleData[i].HMExcludedGms,
                sale.saleData[i].Totcategory,
                formattedDate

            ]);

        }


        return { message: "data Inserted Successfully" };
    } catch (error) {
        // Handle error
        catchAsyncError(error);
    }
};


//    Mode,
//     LocationCode,
//     DocDate,
//     Description ,  
//     ProductDescription,
//     ItemCode,
//     Quantity,
//     Weight,
//     TotalValue,
//     LotNumber,
//     PricingType,
//     BinCode,
//     goldrate,
//     Age,
//     RSOname,
//     ThemeDesign,
//     DiscountCode,
//     InvoiceNo,
//     title,
//     CustomerName,
//     Mobileno,
//     GSTRegno,
//     Fineness,
//     ishallmarking,
//     HallmarkingChargesPERqty,
//     hallmarkqty,
//     HMcharges,
//     HMGSTPercent,
//     HMGSTValue,
//     TotalHMcharges,
//     isfoc,
//     HMExcludedGms,
//     Totcategory


module.exports = { createSales }