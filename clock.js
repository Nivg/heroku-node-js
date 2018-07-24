console.log('IN CLOCK');
var cron = require('node-cron');
import { start } from './worker';

cron.schedule('*/2 * * * *', function () {
    start();
});