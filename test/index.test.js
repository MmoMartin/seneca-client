const seneca = require('seneca');
const expect = require('chai').expect;

const senecaClient = require('./../index');
const port = '8082';
const client = new senecaClient({port: port, host: '127.0.0.1'});

function test () {
  this.add('role:test, cmd:run', (msg, done) => {
    done(null, {code: 200, data: msg.data.test});
  })
}

describe('service client', () => {
  before(done => {
    seneca({log: {level: 'info+'}})
      .use(test)
      .listen({type: 'http', port, pin: 'role:test'})
      .ready(() => {
        done();
      });
  });

  it('send method for callback', done => {
    client.send({module: 'test', cmd: 'run', data: {test: 'test success'}}, function (err, result) {
      expect(err).to.be.equal(null);
      expect(result.code).to.be.equal(200);
      expect(result.data).to.be.equal('test success');
      done();
    });
  });

  it('send method for promise', done => {
    client.send({module: 'test', cmd: 'run', data: {test: 'test success'}}).then((result) => {
      expect(result.code).to.be.equal(200);
      expect(result.data).to.be.equal('test success');
      done();
    });
  });

  it('send method for promise and not send data', done => {
    client.send({module: 'test', cmd: 'run'}).then((result) => {
      expect(result.code).to.be.equal(200);
      expect(result.data).to.be.equal(undefined);
      done();
    });
  });
});