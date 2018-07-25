console.log('IN CLOCK');
var cron = require('node-cron');

var q = 'tasks';

var url = process.env.CLOUDAMQP_URL || "amqp://localhost";
var open = require('amqplib').connect(url);

//cron.schedule('*/15 * * * * *', function () { each 15 seconds
//cron.schedule('* */1 * * *', function () { each 1 minute
// Publisher
open.then(function(conn) {
    var ok = conn.createChannel();
    ok = ok.then(function(ch) {
        ch.assertQueue(q);
        cron.schedule('* * */1 * *', function () {
            console.log('IN CLOCK::sendToQueue::');
            ch.sendToQueue(q, new Buffer('something to do'));
        });
    });
    return ok;
}).then(null, console.warn);