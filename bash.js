var pwd = require('./pwd.js');
var ls = require('./ls');
var cat = require('./cat');
var curl = require('./curl');

process.stdout.write('prompt > ');

const done = output => {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
};

process.stdin.on('data', data => {
  var cmd = data.toString().trim();
  cmd = cmd.split(' ');

  process.stdout.write('You typed: ' + cmd);

  if (cmd[0] == 'pwd') {
    pwd(done);
  }

  if (cmd[0] == 'ls') {
    ls(done);
  }

  if (cmd[0] == 'cat') {
    cat(done, cmd[1]);
  }

  if (cmd[0] == 'curl') {
    curl(done, cmd[1]);
  }
});
