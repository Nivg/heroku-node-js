console.log('IN CLOCK');
var CronJob = require('cron').CronJob;
var worker = require('./worker.js');

var job = new CronJob({
  cronTime: "05 * * * *", // everyday, 9:13, 11:13, 4:13, 8:13,
  onTick: worker.start(),
  start: true,
  timeZone: "America/Los_Angeles"
});

job.start();