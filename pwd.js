
module.exports.pwd = function() {
    process.stdout.write(`\nCurrent directory: ${process.cwd()}`);
    process.stdout.write("prompt > ");

}