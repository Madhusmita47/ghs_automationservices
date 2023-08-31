const app = require("./app");
const info = require("./config/test")

const { connection } = require("./config/database");

require("dotenv").config();

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("mysql connected");
  }
});
// const PORT = 4980;
app.listen(info.PORT, () => {
  console.log(`Server running on port ${info.PORT}`);
});
