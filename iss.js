const request = require("request");

const fetchMyIP = function(callback) {
  
  // use request to fetch IP address from JSON API
  request("https://api.ipify.org?format=json", (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(error, null);
    }
    if (!error) {
      callback(null, data.ip);
    }
  });
};

module.exports = { fetchMyIP };