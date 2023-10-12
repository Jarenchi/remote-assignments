import express from "express";
import usersRouter from "./routes/users.js";
const app = express();
const port = 4000;
app.use(express.json());

app.get("/healthcheck", (req, res) => {
  res.send("Ok");
});

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`the application is running on localhost:${port}`);
});
