const express = require("express");
const getUserByID = require("../functions/users/getUserByID");
const getUserPosts = require("../functions/users/getUserPosts");
const getAllUsers = require("../functions/users/getAllUsers");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:userid", getUserByID);
router.post("/posts", getUserPosts);

module.exports = router;
