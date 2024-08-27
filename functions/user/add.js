const { create } = require("apisauce");
const _ = require("lodash");

const userAdd = async (req, res) => {
  //  https://reqres.in/api/products/2

  const api = create({
    baseURL: "https://reqres.in/api",
    headers: { Accept: "application/json" },
  });
  const result = await api.get("/products/" + req.body.id);

  if (!result.ok) {
    res.status(403).send("Request failed");
    return;
  }

  res.send({
    success: true,
    data: result.data.data,
  });
};

module.exports = userAdd;
