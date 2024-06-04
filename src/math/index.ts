/**
 * 获取范围内随机整数
 * @param min 最小值
 * @param max 最大值
 * @param last 是否包含最后一位, 默认 false，[s,e)
 */
export function random(min: number, max: number, last = false): number {
  return parseInt((Math.random() * (max - min + Number(last)) + min).toString(), 10);
}

/**
 * 获取随机字符串
 * @param length 长度
 */
export function randomString(length?: number): string {
  if (length === void 0) {
    length = 6;
  }

  /* prettier-ignore */
  const db = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let result = "";

  for (let i = 0; i < length; i++) {
    result += db[random(0, db.length - 1, true)];
  }

  return result;
}

//随机色
export function randomColor() {
  const colorAngle = Math.floor(Math.random() * 360);
  return `hsla(${colorAngle},100%,50%,1)`;
}

// 随机色
export function bgcolor(event: Event) {
  //优化，减少节点操作，数据添加属性引用
  const trStyle = (event as any).target.parentElement.parentElement.style;
  const red = parseInt(Math.random() * 256 + "");
  const green = parseInt(Math.random() * 256 + "");
  const bule = parseInt(Math.random() * 256 + "");

  trStyle.backgroundColor = `rgb(${red},${green},${bule})`;
  trStyle.color = "red";
}
