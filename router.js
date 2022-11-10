const express = require("express");

const router = express();

router.post("/accounts", (req, res) => {
    console.log("Accounts foi chamada");
    console.log(req.body);
    return res.sendStatus(200);
});

router.post("/accounts/login", (req, res) => {
    console.log("Accounts/login foi chamada");
    console.log(req.body);
    return res.sendStatus(200);
});

router.patch("/accounts", (req, res) => {
    console.log("Accounts foi chamada (patch)");
    console.log(req.body);
    return res.sendStatus(200);
});

module.exports = router;
