const mongoose = require("mongoose");

const db = async()=>
{
    try{
        await mongoose.connect("mongodb+srv://admin:Josephin%400904@cluster0.dckn8hi.mongodb.net/backend");
        console.log("DB connected");
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports = db;