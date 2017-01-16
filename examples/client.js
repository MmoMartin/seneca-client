/**
 * Created by heyufeng on 17/1/5.
 */
const client = require('./../index');

const a = new client({port: 8082, host: '127.0.0.1'});

a.send({module: 'test', cmd: 'run', data: {test: 'test success'}}, function (err, result) {
  console.log(err);
  console.log(result);
});

a.send({module: 'test', cmd: 'run', data: {test: 'test success'}}).then((result) => {
  console.log('-----------', result);
});
