console.log('IN CLOCK');
var cron = require('node-cron');
var worker = require('./worker');

var q = 'tasks';

var url = process.env.CLOUDAMQP_URL || "amqp://localhost";
var open = require('amqplib').connect(url);

cron.schedule('*/2 * * * * *', function () {
    // Publisher
    open.then(function(conn) {
        var ok = conn.createChannel();
        ok = ok.then(function(ch) {
        ch.assertQueue(q);
        ch.sendToQueue(q, new Buffer('something to do'));
        });
        return ok;
    }).then(null, console.warn);
});


