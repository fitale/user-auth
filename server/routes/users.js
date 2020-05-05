const express = require("express");

const helper = require("../helper/helper");
const userFile = __dirname + "/../models/users.json";
const users = require(userFile);

const router = express.Router();

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  let found = users.some((user) => user.id === req.params.id);
  if (found) return res.json(users.filter((user) => user.id === req.params.id));
  else
    return res
      .status(404)
      .json({ errorMessage: `User with ID: ${req.params.id} not found` });
});

router.post("/", (req, res) => {
  const newUser = {
    id: helper.getNewId(),
    email: req.body.email,
    password: req.body.password,
    created: new Date(),
  };
  users.push(newUser);
  helper.writeJSONFile(userFile, users);
  res.json(users);
});

router.delete("/:id", (req, res) => {
  const found = users.some((user) => user.id === req.params.id);
  if (found) {
    const usersAfterDelete = users.filter((user) => user.id !== req.params.id);
    helper.writeJSONFile(userFile, usersAfterDelete);
    res.json({
      msg: `User with ID: ${req.params.id} has been deleted`,
      users: usersAfterDelete,
    });
  } else
    return res
      .status(404)
      .json({ errorMessage: `User with ID: ${req.params.id} not found` });
});

module.exports = router;
