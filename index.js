const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const chefs = require("./data/chefsData.json");

app.get("/", (req, res) => {
  res.send("chef is cooking");
});

app.listen(port, () => {
  console.log(`chef is cooking data for you at port ${port}`);
});
