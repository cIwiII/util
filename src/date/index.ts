function pad(value: any, length: number = 2) {
  return value.toString().padStart(length, "0");
}

/**
 * 日期处理，传入时间戳
 * @param {*} timestamp 时间戳 | Date
 * @param {*} form 时间格式
 * @returns 标准时间 YYYY-MM-DD hh:mm:ss
 */
export function formatTime(timestamp: number | Date, form: string = "YYYY-MM-DD hh:mm:ss") {
  try {
    const date = new Date(timestamp);
    const year = pad(date.getFullYear(), 4);
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());

    return form
      .replace("YYYY", year)
      .replace("MM", month)
      .replace("DD", day)
      .replace("hh", hours)
      .replace("mm", minutes)
      .replace("ss", seconds);
  } catch (error) {
    throw new TypeError(`formatTime 参数错误`);
  }
}

/**
 *
 * @param date 时间
 * @param format 格式
 * @returns
 *
 * @example
 *
 * const date = new Date();
 * console.log(formatDateTime(date, 'yyyy-MM-dd HH:mm:ss')); // 2023-02-18 21:49:05
 * console.log(formatDateTime(date, 'yyyy年MM月dd日 a hh:mm:ss')); // 2023年02月18日 下午 9:49:05
 * console.log(formatDateTime(date, 'yyyy-MM-dd HH:mm:ss S')); // 2023-02-18 21:49:05 950
 * console.log(formatDateTime(date, 'yyyy-MM-dd A hh:mm:ss')); // 2023-02-18 PM 21:49:05 
 */
export function formatDateTime(date: Date, format: string) {
  const o = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "h+": date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    "H+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
    a: date.getHours() < 12 ? "上午" : "下午", // 上午/下午
    A: date.getHours() < 12 ? "AM" : "PM" // AM/PM
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return format;
}
