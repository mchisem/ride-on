const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  if (password.length < 7) {
    res.status(500).json({ msg: "Password must be longer than 7 characters" });
    return;
  }

  let newUser = new User({
    username,
    passwordHash: bcrypt.hashSync(password, 10)
  });

  newUser
    .save()
    .then((user) => {
      jwt.sign(
        {
          username: newUser.username,
        },
        "secret",
        (err, token) => {
          if (err) throw err;
          res.send({
            token,
            user: {
              username: user.username,
            },
          });
        }
      );
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: `User ${err.keyValue["username"]} already exists. Try loggin in.`,
      });
    });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username })
    .then((user) => {
      if (!user) {
        res
          .status(500)
          .json({ msg: `No user found with that username: ${username}` });
        return;
      } else if (!bcrypt.compareSync(password, user.passwordHash)) {
        res.status(500).json({ msg: "Invalid password!" });
      }
      jwt.sign(
        {
          username: user.username,
        },
        "secret",
        (err, token) => {
          if (err) throw err;
          res.send({
            token,
            user: {
              username: user.username,
            },
          });
        }
      );
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

module.exports = router;
