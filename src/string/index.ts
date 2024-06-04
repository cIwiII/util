
/**
 * 复制字符串到剪贴板
 * @param value 需要复制的字符串
 * @return 返回是否复制成功
 */
export function copyText(value: string): boolean{
  /* 更新 */
  if (window.navigator.clipboard) {
      window.navigator.clipboard.writeText(value).then(() => {console.log('copy success')});
      return true;
  }
  /* 兼容处理 */
  let isCopySuccess = false;
  const input = document.createElement('input');
  document.body.appendChild(input);
  input.style.display = 'none';
  input.value = value;
  input.select(); //选择对象
  // 浏览器复制命令，execCommand兼容
  if (document.execCommand('copy',true)) {
    isCopySuccess = true;
  }
  document.body.removeChild(input);
  return isCopySuccess;
}

/**  
 * @export  copyText(JSON.stringify(value));
 */
export function copyText2(value) {
  const command = "copy";
  document.addEventListener(command, listener);
  document.execCommand(command);
  document.removeEventListener(command, listener);

  function listener(event) {
    event.clipboardData.setData("text/plain", value);
    event.preventDefault();
  }
}

/**
 * 计算字符串所占的内存字节数，默认使用UTF-8的编码方式计算，也可制定为UTF-16
 * @param str 字符串
 * @param charset utf-8,utf-16
 * @return 字符串所占的内存字节数
 */
export function charBytes(str: string | number, charset: 'utf-8' | 'utf-16'): number {
  var total = 0;
  var charCode;
  var i;
  var len;
  str = str.toString();
  charset = charset ?? '';

  if (str) {
    // UTF-16
    // 000000 - 00FFFF  两个字节
    // 010000 - 10FFFF  四个字节
    if (charset === 'utf-16') {
      for (i = 0, len = str.length; i < len; i++) {
        charCode = str.charCodeAt(i);

        if (charCode <= 0xffff) {
          total += 2;
        } else {
          total += 4;
        }
      }
    } // 000000 - 00007F(128个代码)      0zzzzzzz(00-7F)                             一个字节
    // 000080 - 0007FF(1920个代码)     110yyyyy(C0-DF) 10zzzzzz(80-BF)             两个字节
    // 000800 - 00D7FF
    // 00E000 - 00FFFF(61440个代码)    1110xxxx(E0-EF) 10yyyyyy 10zzzzzz           三个字节
    // 010000 - 10FFFF(1048576个代码)  11110www(F0-F7) 10xxxxxx 10yyyyyy 10zzzzzz  四个字节
    else {
        for (i = 0, len = str.length; i < len; i++) {
          charCode = str.charCodeAt(i);

          if (charCode <= 0x007f) {
            total += 1;
          } else if (charCode <= 0x07ff) {
            total += 2;
          } else if (charCode <= 0xffff) {
            total += 3;
          } else {
            total += 4;
          }
        }
      }

    return Number((total / 1024).toFixed(2));
  }

  return 0;
}


/**
 * 
 * @param {*} str  需要扩展至指定长度的字符串
 * @param {*} targetLength  添加后的长度
 * @param {*} padString  添加的字符，默认空格' '
 * @returns 指定长度的字符串
 */
export function padStart(str, targetLength, padString) {
  // 布尔值、null 或 undefined，NaN转为0
  targetLength = targetLength >> 0;
  padString = String(padString || " ");
  if (str.length >= targetLength) {
    return String(str);
  } else {
    targetLength = targetLength - str.length;
    if (targetLength > padString.length) {
      padString += padString.repeat(targetLength / padString.length);
    }
    return padString.slice(0, targetLength) + String(str);
  }
}

/* 添加到原型上 */
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0;
    padString = String(padString || " ");
    if (this.length >= targetLength) return String(this);

    targetLength = targetLength - this.length;
    if (targetLength > padString.length) {
      padString += padString.repeat(targetLength / padString.length);
    }
    return padString.slice(0, targetLength) + String(this);
  };
}