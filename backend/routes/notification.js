const express = require('express');

const router = express.Router();


let notifications = [
    {
        id : 1,
        title : "Placement Test",
        message : "You have a new Placement test on tommorow morning at 9 am",
        category :"Placmenet",
    },
    {
        id : 2,
        title : " Test Result",
        message : "You have a  test result on tommorow morning at 9 am",
        category :"Result",
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