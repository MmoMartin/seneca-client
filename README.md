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
```json
const Client = require('seneca-client'); 
const exampleClient = new Client({port: 10100, host: 'localhost'});
```
* `port` The seneca service port
* `host` The seneca service host

## Usage
```json
const Client = require('seneca-client'); 
const exampleClient = new Client({port: 10100, host: 'localhost'});

exampleClient.send({module: 'test', cmd: 'run', data: {test: 'test success'}}, function (err, result) {
  console.log(err);
  console.log(result);
});
```
* `module|service|role`
* `cmd`
* `data`

## License
[The MIT License](http://opensource.org/licenses/MIT)


