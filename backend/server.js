const express = require('express');

const app = express();

app.use(express.json());

const notificationRoutes = require("./routes/notification");

const db=  require("./config/db");

db();

app.use("/api/notification",notificationRoutes);

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
