const express = require("express");
const router = express.Router();
const CC = require("currency-converter-lt");

router.get("/", (req, res) => {
    res.render("index");
    // res.send("Hello from UI ");
});
router.get("/contact", (req, res) => {
    res.render("contact");
});
router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/converter/:currency1/:currency2/:value", async(req, res) => {
    const {currency1, currency2, value } = req.params;
let currencyConverter =new CC ({
    from: currency1,
    to: currency2,
    amount:Number(value),
});
    // initialize currency package
    // put the code from prev exercise
    // pass the value as variable in the code
    // store the result in a variable called result
    const result = await currencyConverter.convert();
    req.send(
        `Currency Price of ${value} ${currency1} in ${currency2} is ${result}`
        );
});

module.exports = router;