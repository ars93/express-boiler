const itemModel = require("../models/itemModel");

exports.getItems = async (req, res, next) => {
  try {
    const items = await itemModel.getAllItems();
    res.json(items);
  } catch (err) {
    next(err);
  }
};

exports.createItem = async (req, res, next) => {
  const { name, description } = req.body;
  try {
    const newItem = await itemModel.createItem(name, description);
    res.status(201).json(newItem);
  } catch (err) {
    next(err);
  }
};
