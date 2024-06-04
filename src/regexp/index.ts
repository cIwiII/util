
//
class RegexUtil {
  // 16进制颜色
  static colorReg = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;

  // 中文字符
  static en = /[\u4e00-\u9fa5]/g; // 非中文取反：  /[^\u4E00-\u9FA5]/g

  // 匹配双字节字符(包括汉字在内)：
  static enTd = /[^\x00-\xff]*/;

  // 全角字符
  static allc = /[\uFF00-\uFFFF]/g;

  // 匹配空行的正则表达式：
  static emty = /(\n[\s|]*\r)*/;

  // 匹配html
  static html = /<(.*)>.*<\/\1>|<(.*) \/>/;

  // html文本  匹配>之后的，<之前
  static htmlText = /(?<=>)[^<]+?(?=<)/g;

  // 匹配首尾空格，字符串去空格，可以使用 str.trim()
  static swEmty = /(^\s*)|(\s*$)/g;

  // 匹配IP地址的正则表达式
  static IP2V = /(\d+)\.(\d+)\.(\d+)\.(\d+)/g;

  // 匹配Email地址
  static em = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

  // 匹配网址URL
  // static url = /http:\/\/([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?/;

  // 匹配日期
  static dataReg = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

  //QQ
  static qqReg = /6[1-9][0-9]{4,10}$/g;

  //手机号
  static telReg = /^1[3-9]\d{9}$/g;

  // 用户名
  static userNameReg = /^[a-zA-Z\$][a-zA-Z0-9_\$]{4,16}$/;

  //密码
  static passwordReg = /^[a-zA-Z][0-9A-Za-z]{5,11}$/;

  //判断手机号正则
  static checkTel(str) {
    return this.telReg.test(str);
  }
  static checkPassword(str) {
    return this.passwordReg.test(str);
  }
}

// 手机号，中间4位替换为*
const changeCode = (code: number | string) => {
  // const result = code.replace(code.substring(3,7),"****")
  const result = code.toString().replace(/(\d{3})(\d{4})(\d{4})/, "$1****$3"); //RegExp.$1
  return result;
};
