const _ = require("lodash");

const makeCalc = async (req, res) => {
  const { list } = req.body;

  const getGrade = (array) => {
    let sum = 0;
    array.forEach((element) => {
      sum = sum + element;
    });
    let avg = sum / array.length; // Average
    let grade =
      avg <= 59
        ? "F"
        : avg <= 69
        ? "D"
        : avg <= 79
        ? "C"
        : avg <= 89
        ? "B"
        : "A";
    return {
      average: avg,
      grade,
    };
  };

  let result = getGrade(list);

  res.send({
    result,
  });
};

module.exports = makeCalc;
