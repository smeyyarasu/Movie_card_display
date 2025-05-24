const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "movies",
});

app.get("/movies", (req, res) => {
  const sql = "SELECT * FROM movies";
  db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.get("/", (req, res) => {
  return res.json("Hello World! backend");
});

app.listen(8081, () => {
  console.log("listening");
});
