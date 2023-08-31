// catchAsyncError.js

const catchAsyncError = (error, res) => {
    console.error('Error occurred: ', error);
    // res.status(500).json({ error: 'Internal Server Error' });
    throw error;
};

module.exports = catchAsyncError;



