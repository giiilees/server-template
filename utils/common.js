const moment = require("moment");

exports.commonUtils = {
  BaseURL:
    process.env.NODE_ENV == "production"
      ? "https://api.deltawire.io"
      : "http://192.168.1.64:6700",
  financial: (x) => {
    return Number.parseFloat(x).toFixed(2);
  },
  calculateDistance: (lat1, lon1, lat2, lon2) => {
    //console.log({ lat1, lon1, lat2, lon2 });
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  },
  isDateExpired: (dateString) => {
    const inputDate = new Date(dateString);
    const currentDate = new Date();

    return inputDate < currentDate;
  },
  referalGen: function (length) {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n)).toUpperCase();
    }
    return retVal;
  },
  referalCodeGen: function generateId(firstName, lastName) {
    // Combine first name and last name (uppercase)
    const combinedName = (firstName + lastName).toUpperCase().replace(" ", "");

    // Truncate combined name to max 6 characters
    const name = combinedName.substring(0, Math.min(7, combinedName.length));

    // Generate a random number for remaining characters (10 - name length)
    const randomNumLength = 10 - name.length;
    const randomNum = Math.floor(Math.random() * Math.pow(10, randomNumLength))
      .toString()
      .padStart(randomNumLength, "0");

    // Combine name part and random number
    return name + randomNum;
  },

  getTodayTime: () => {
    const now = moment();
    const startOfDay = now.startOf("day").format("YYYY-MM-DDTHH:mm:ss");

    // Get the end of the current day
    const endOfDay = now.endOf("day").format("YYYY-MM-DDTHH:mm:ss");
    return {
      startOfDay,
      endOfDay,
    };
  },
  findObjectById: (array, key, id) => {
    return array.filter((obj) => obj[key] === parseInt(id));
  },
};
