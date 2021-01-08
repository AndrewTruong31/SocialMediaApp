const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
var config = require("./config.js");
const bcrypt = require("bcrypt");

const db = mysql.createPool(config.databaseOptions);
const saltRounds = 10;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/search", (req, res) => {
  const search = req.body.value;
  console.log(search);
});

app.get("/api/getCard", (req, res) => {
  const sqlGetCard = "SELECT * FROM card";
  db.query(sqlGetCard, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.post("/api/getProfile", (req, res) => {
  const sqlGetCard = "SELECT * FROM users WHERE username = ?";
  db.query(sqlGetCard, req.body.username, (err, result) => {
    res.send(result);
  });
});

app.post("/api/createPost", (req, res) => {
  const user = req.body.user;
  const imageURL = req.body.imageURL;
  const description = req.body.description;

  console.log(user);
  console.log(imageURL);
  console.log(description);

  const sqlCreateCard =
    "INSERT INTO card (user, imageURL, description) VALUES (?,?,?);";
  db.query(sqlCreateCard, [user, imageURL, description], (err, result) => {
    console.log(err);
  });
});

app.post("/api/createUser", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const profileURL = req.body.profileURL;

  const sqlCheckExists = "SELECT * FROM users WHERE username = ?;";

  db.query(sqlCheckExists, [username], (err, result) => {
    if (result.length === 0) {
      const sqlCreateUser =
        "INSERT INTO users (username, profileURL, hashedPassword) VALUES (?,?,?);";

      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
          console.log(err, hash)
          db.query(
            sqlCreateUser,
            [username, profileURL, hash],
            (err, result) => {
              console.log(err);
              console.log("Created User")
              res.send({
                value:1
              })
            }
          );
        });
      });
    }else{
      console.log("Username is taken")
      res.send({
        value:-1
      })
    }
  });
});

app.post("/api/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const sqlGetPass = "SELECT hashedPassword FROM users WHERE username = ?";

  db.query(sqlGetPass, [username], (err, hashData) => {
    const hash = hashData[0].hashedPassword;

    bcrypt.compare(password, hash, function (err, result) {
      console.log(result);
      res.send(result);
    });
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
