//console.log(process.argv[2], process.argv[3])
let argv = require('minimist')(process.argv.slice(2), process.argv[3]);
console.log(argv);

