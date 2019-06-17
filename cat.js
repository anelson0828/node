const fs = require('fs');

module.exports.cat = function(name) {
    fs.readFile(name, (err, data) => {
        if (err) throw err;
        console.log(data.toString());
      });
}