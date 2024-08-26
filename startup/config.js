const config = require("config");
const fs = require("fs");
const { fileSizes } = require("../utils/fileSizes");

module.exports = async function () {
  for (let index = 0; index < fileSizes.length; index++) {
    const element = fileSizes[index];
    await fs.promises
      .mkdir(`public/uploads/images/${element}/`, { recursive: true })
      .catch(console.error);
  }
};
