const express = require("express");
const App = express();
require("dotenv").config();
const Router = require("./routes/routers")
const {db_connection} = require("./databases/mongoose")

const port = process.env.PORT || 9000 || 9001

db_connection();

App.use(express.json());

App.use("/user",Router);

App.listen(port,()=>{console.log(`server is running on port ${port}`)})


