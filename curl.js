const request = require('request');

module.exports = (done, name) => {
  request(name, function(error, response, body) {
    if (error) {
      done('Something went wrong!');
    } else {
      // done(response && response.statusCode);
      done(response && body);
    }
  });
};
