const express = require("express");
const fs = require("fs");
const util = require("util");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`Port ${PORT} is active...`);
  });