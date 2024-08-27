const { create } = require("apisauce");
const _ = require("lodash");
const data = require("../../public/data/examples.json");

const userAdd = async (req, res) => {
  //  https://reqres.in/api/products/2

  res.send({
    success: true,
    data: data["users"][0],
  });
};

module.exports = userAdd;
