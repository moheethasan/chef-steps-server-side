const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const chefs = require("./data/chefsData.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("chef is cooking");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.listen(port, () => {
  console.log(`chef is cooking data for you at port ${port}`);
});
