const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({msg: "HEllo from UI "});
});

router.get("/converter/:currency1/:currency2/:value", (req, res) => {
    const {currency1, currency2, value } = req.params;
    const result = "";
    req.setEncoding(`Hello ${result}`);
});

module.exports = router;