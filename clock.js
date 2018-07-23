console.log('IN CLOCK');
var cron = require('node-cron');
var worker = require('./worker.js');

cron.schedule('*/2 * * * *', function(){
    worker.start();
});