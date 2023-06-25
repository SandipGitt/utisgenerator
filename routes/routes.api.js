const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({msg: "HEllo from API "});
});

module.exports = router;