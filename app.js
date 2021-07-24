const fs = require('fs');
const format = require('node.date-time');console.log(new Date().format("Y-M-d"));
let logTime = new Date().format("Y-MM-dd HH:MM:SS");


setInterval(function() {
    fs.appendFileSync('readme.log', logTime + '\n');
}, 2000);
