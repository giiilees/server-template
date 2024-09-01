const addPosts = require("./addPosts");
const getAllPosts = require("./getAllPosts");
const getPostByID = require("./getPostByID");
const getPostComments = require("./getPostComments");
const getPostData = require("./getPostData");

const postFunctions = {
  getAllPosts,
  getPostByID,
  getPostComments,
  getPostData,
  addPosts,
};

module.exports = postFunctions;
