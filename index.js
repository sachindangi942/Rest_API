const express = require("express");
const App = express();
require("dotenv").config();
const registration = require("./routes/routers")
const {db_connection} = require("./databases/mongoose")

const port = process.env.PORT || 9000 || 9001

db_connection();

App.use(express.json());

App.use("/user",registration);

App.listen(port,()=>{console.log(`server is running on port ${port}`)})


