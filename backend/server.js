import express from "express";

const app = express();

app.listen(5003, () => {
  console.log("Server started on PORT: ", 5003);
});
