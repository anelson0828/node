const fs = require('fs');

module.exports = (done, name) => {
  fs.readFile(name, (err, data) => {
    if (err) {
      done('Something went wrong!');
    } else {
      done(data.toString());
    }
  });
};
