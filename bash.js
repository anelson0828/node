var pwd = require('./pwd.js');
var ls = require('./ls');
var cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    var cmd = data.toString().trim();
    cmd = cmd.split(' ');

    process.stdout.write('You typed: ' + cmd);

    if(cmd[0] == "pwd") {
        pwd.pwd();
    }

    if(cmd[0] == 'ls') {
        ls.ls();
    }

    if(cmd[0] == 'cat') {
        cat.cat(cmd[1]);
    }

    


    process.stdout.write('\nprompt > ');
})