const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
require('dotenv').config();



const app = express()
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
const Port = 8081 || process.env.PORT;

app.get("/",(req,res)=>
    res.send('Hello World!')

)


app.listen(Port, () => {
    console.log(`server is running in port ${Port}`);
  });
  