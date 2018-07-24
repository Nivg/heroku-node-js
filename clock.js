console.log('IN CLOCK');
var cron = require('node-cron');
var worker = require('./worker');

cron.schedule('*/2 * * * * *', function () {
    worker.start();
});