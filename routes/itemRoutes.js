const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

router.get("/product", itemController.getItems);
router.post("/product", itemController.createItem);

module.exports = router;
