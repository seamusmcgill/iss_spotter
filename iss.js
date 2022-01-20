const request = require("request");

const fetchMyIP = (callback) => {
  // use request to fetch IP address from JSON API
  request("https://api.ipify.org?format=json", (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(msg), null);
      return;
    }
 
    callback(null, data.ip);
  });
};

const fetchCoordsByIP = (ip, callback) => {
  // use request to fetch coordinates
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching IP. Response ${body}`;
      return callback(Error(msg), null);
    }
    const data = JSON.parse(body);
    let coordinates = {
      latitude: data.latitude,
      longitude: data.longitude,
    };
    callback(null, coordinates);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };