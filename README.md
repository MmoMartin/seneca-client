# seneca-client
seneca client for xunyijia

## Install
```sh
$ npm install seneca-client --save
```

## Test
```sh
$ npm install
$ mocha test
```
## Client
```js
const Client = require('seneca-client'); 
const exampleClient = new Client({port: 10100, host: 'localhost'});
```
* `port` The seneca service port
* `host` The seneca service host

## Usage
支持回调模式和`promise`模式
```js
const Client = require('seneca-client'); 
const exampleClient = new Client({port: 10100, host: 'localhost'});

exampleClient.send({module: 'test', cmd: 'run', data: {test: 'test success'}}, function (err, result) {
  console.log(err);
  console.log(result);
});

exampleClient.send({module: 'test', cmd: 'run', data: {test: 'test success'}}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
```
* `module|service|role`
* `cmd`
* `data`

## License
[The MIT License](http://opensource.org/licenses/MIT)


