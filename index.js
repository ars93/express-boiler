const express = require("express");
const app = express();
const errorHandler = require("./middleware/errorHandler");
const itemRoutes = require("./routes/itemRoutes");
const logger = require("./utils/logger");
require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", itemRoutes);

app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});
