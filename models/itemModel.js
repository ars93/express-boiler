const db = require("../config/db");

const getAllItems = async () => {
  const [rows] = await db.query("SELECT * FROM items");
  return rows;
};

const createItem = async (name, description) => {
  const [result] = await db.query(
    "INSERT INTO items (name, description) VALUES (?, ?)",
    [name, description]
  );
  return { id: result.insertId, name, description };
};

module.exports = {
  getAllItems,
  createItem,
};
