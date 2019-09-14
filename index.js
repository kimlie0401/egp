import express from "express";
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to GraphQL"
  });
});
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
