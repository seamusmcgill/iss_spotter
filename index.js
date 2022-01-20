const { fetchMyIP, fetchCoordsByIP, fetchISSFlyoverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("Error finding IP address:" , error);
//     return;
//   }

//   fetchCoordsByIP(ip, (error, coords) => {
//     if (error) {
//       console.log("Error finding coordinates:" , error);
//       return;
//     }
    
//     fetchISSFlyoverTimes(coords, (error, times) => {
//       if (error) {
//         console.log("Error finding flyover times: ", error);
//         return;
//       }
//       console.log(times);
//     });
//   });
// });

