/**
 * Created by heyufeng on 17/1/5.
 */
const seneca = require('seneca');

function test () {
  this.add('role:test, cmd:run', (msg, done) => {
    done(null, {code: 200, data: msg.data.test});
  })
}

seneca({log: {level: 'info+'}})
  .use(test)
  .listen({type: 'http', port: '8082', pin: 'role:test'});