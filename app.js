const express = require("express");
const app = express();
const port = 3000;

app.get("/healthcheck", (req, res) => {
  res.send("Ok");
});

app.listen(port, () => {
  console.log(`the application is running on localhost:${port}`);
});
