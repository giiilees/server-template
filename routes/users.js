const express = require("express");
const getUserByID = require("../functions/users/getUserByID");
const getUserPosts = require("../functions/users/getUserPosts");
const getAllUsers = require("../functions/users/getAllUsers");
const addUser = require("../functions/users/addUser");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:userid", getUserByID);
router.post("/posts", getUserPosts);
router.post("/add", addUser);

module.exports = router;
