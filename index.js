/**
 * Created by heyufeng on 17/1/5.
 */
const seneca = require('seneca');

class MessageBusClient {
  /**
   * @param props {Object}
   *  * port {String} 端口
   *  * host {String} 地址
   *  * pin {String} 固定role
   */
  constructor(props){
    props = props || {};
    if(!props.port){
      throw new Error('port undefined');
    }
    this.port = props.port;
    this.host = props.host || 'localhost';
    this.pin = props.pin || undefined;
    this.senecaClient = seneca({log: {level: 'error+'}})
      .client({port: this.port, host: this.host, pin: this.pin});
  }

  /**
   * 封装seneca的act方法
   * @param obj {Object} 包装其他参数
   *  * [module|service|role] {string} 模型、模块、快,优先使用module和service
   *  * [cmd] {string} 命令
   *  * data {Object|String} 传递数据
   * @param cb {Function} 回调
   */
  send (obj, cb){
    obj = obj || {};
    obj.role = obj.module || obj.service || obj.role || '';
    obj.cmd = obj.cmd || '';
    obj.data = obj.data || '';
    this.senecaClient.act(obj, cb);
  }
}

module.exports = MessageBusClient;