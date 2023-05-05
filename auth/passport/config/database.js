require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI)
.then(() => {
    console.log("db is connected");
})
.catch((error) => {
    console.log("database is not connected");
    console.log(error.message)
});