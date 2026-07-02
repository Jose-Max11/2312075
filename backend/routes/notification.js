const express = require('express');

const router = express.Router();


let notifications = [
    {
        id : 1,
        title : "Placement Test",
        message : "You have a new Placement test on tommorow morning at 9 am",
        category :"Placmenet",
    }
];

router.get("/",(req,res)=>{
    res.json(
        {
            success : true,
            data : notifications,
        });
});

module.exports = router;