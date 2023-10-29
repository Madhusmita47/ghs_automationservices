const catchAsyncError = require("../middleware/catchasyncErrors");
const { dbQuery } = require("../config/database");


const axios = require('axios'); // Import the Axios library

const insertToken = async () => {
    try {
        
        const apiUrl = `https://accounts.zoho.in/oauth/v2/token?refresh_token=1000.2cd4c4761f2ccd18d47915cd28352d01.ea9ab8f0e2e50d42874e8175a3f9280a&grant_type=refresh_token&client_id=1000.4HD39OAFAKRU3ZI8OS2QCFFAU5HJZR&client_secret=18063a627ae1af0b40d49a5c2a613f8bc4606eacb0&redirect_uri=https://www.google.com/&scope=ZohoMail.tasks.ALL,ZohoMail.partner.organization.ALL,ZohoMail.organization.accounts.ALL,ZohoMail.messages.ALL,ZohoMail.organization.groups.ALL`;

      
        const response = await axios.post(apiUrl);

        // console.log(response)
        const accessToken = response.data.access_token;

        // console.log(accessToken)
        const query = `
           INSERT INTO zoho_auth_key (auth_token)
           VALUES(?)
        `;

        await dbQuery(query, [accessToken]);

        return { message: "Token inserted successfully" };
    } catch (error) {
     
        console.error(error);
        catchAsyncError(error);
    }
};


module.exports = { insertToken }