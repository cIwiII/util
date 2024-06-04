
/* eslint-disable no-plusplus, no-cond-assign, no-return-assign */

/**
 * swing
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function swing(t: number, b: number, c: number, d: number):number {
  return b + (0.5 - Math.cos(t / d * Math.PI) / 2) * c;
};

/**
 * inQuad
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function inQuad(t: number, b: number, c: number, d: number):number{
  if ((t /= d / 2) < 1) return c / 2 * t * t + b;
  return -c / 2 * (--t * (t - 2) - 1) + b;
};


/**
 * outQuad
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function outQuad(t: number, b: number, c: number, d: number): number {
  return -c * (t /= d) * (t - 2) + b;
};


/**
 * inOutQuad
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function inOutQuad(t: number, b: number, c: number, d: number):number{
  if ((t /= d / 2) < 1) return c / 2 * t * t + b;
  return -c / 2 * (--t * (t - 2) - 1) + b;
};


/**
 * inCubic
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function inCubic(t: number, b: number, c: number, d: number) : number {
  return c * (t /= d) * t * t + b;
};


/**
 * outCubic
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function outCubic(t: number, b: number, c: number, d: number) : number {
  return c * ((t = t / d - 1) * t * t + 1) + b;
};


/**
 * inOutCubic
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function inOutCubic(t: number, b: number, c: number, d: number) : number {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t + 2) + b;
};


/**
 * inQuart
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function inQuart(t: number, b: number, c: number, d: number) : number {
  return c * (t /= d) * t * t * t + b;
};


/**
 * outQuart
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function outQuart(t: number, b: number, c: number, d: number) : number {
  return -c * ((t = t / d - 1) * t * t * t - 1) + b;
};


/**
 * inOutQuart
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function inOutQuart(t: number, b: number, c: number, d: number) : number {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
  return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
};



/**
 * inQuint
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function inQuint(t: number, b: number, c: number, d: number) : number {
  return c * (t /= d) * t * t * t * t + b;
};



/**
 * outQuint
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function outQuint(t: number, b: number, c: number, d: number) : number {
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
};



/**
 * inOutQuint
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function inOutQuint(t: number, b: number, c: number, d: number) : number {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
};


/**
 * inSine
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function inSine(t: number, b: number, c: number, d: number) : number {
  return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
};



/**
 * outSine
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function outSine(t: number, b: number, c: number, d: number) : number {
  return c * Math.sin(t / d * (Math.PI / 2)) + b;
};



/**
 * inOutSine
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function inOutSine(t: number, b: number, c: number, d: number) : number {
  return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};


/**
 * inExpo
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function inExpo(t: number, b: number, c: number, d: number) : number {
  return t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
};



/**
 * outExpo
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function outExpo(t: number, b: number, c: number, d: number) : number {
  return t === d ? b + c : c * (-1 * Math.pow(2, -10 * t / d) + 1) + b;
};


/**
 * inOutExpo
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function inOutExpo(t: number, b: number, c: number, d: number) : number {
  if (t === 0) return b;
  if (t === d) return b + c;
  if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
  return c / 2 * (-1 * Math.pow(2, -10 * --t) + 2) + b;
};


/**
 * inCirc
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function inCirc(t: number, b: number, c: number, d: number) : number {
  return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
};


/**
 * outCirc
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function outCirc(t: number, b: number, c: number, d: number) : number {
  return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
};



/**
 * inOutCirc
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function inOutCirc(t: number, b: number, c: number, d: number) : number {
  if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
  return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
};



/**
 * inElastic
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function inElastic(t: number, b: number, c: number, d: number) : number {
  var s = 1.70158;
  var p = 0;
  var a = c;
  if (t === 0) return b;
  if ((t /= d) === 1) return b + c;
  if (!p) p = d * 0.3;

  if (a < Math.abs(c)) {
    a = c;
    s = p / 4;
  } else s = p / (2 * Math.PI) * Math.asin(c / a);

  return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
};



/**
 * outElastic
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function outElastic(t: number, b: number, c: number, d: number) : number {
  var s = 1.70158;
  var p = 0;
  var a = c;
  if (t === 0) return b;
  if ((t /= d) === 1) return b + c;
  if (!p) p = d * 0.3;

  if (a < Math.abs(c)) {
    a = c;
    s = p / 4;
  } else s = p / (2 * Math.PI) * Math.asin(c / a);

  return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
};



/**
 * inOutElastic
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function inOutElastic(t: number, b: number, c: number, d: number) : number {
  var s = 1.70158;
  var p = 0;
  var a = c;
  if (t === 0) return b;
  if ((t /= d / 2) === 2) return b + c;
  if (!p) p = d * (0.3 * 1.5);

  if (a < Math.abs(c)) {
    a = c;
    s = p / 4;
  } else s = p / (2 * Math.PI) * Math.asin(c / a);

  if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
};



/**
 * inBack
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 * @param s
 */
export function inBack(t, b, c, d, s) {
  if (s === void 0) {
    s = 1.70158;
  }

  return c * (t /= d) * t * ((s + 1) * t - s) + b;
};


/**
 * outBack
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 * @param s
 */
export function outBack(t, b, c, d, s) {
  if (s === void 0) {
    s = 1.70158;
  }
  return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
};


/**
 * inOutBack
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 * @param s
 */
export function inOutBack(t, b, c, d, s) {
  if (s === void 0) {
    s = 1.70158;
  }

  if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
  return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
};


/**
 * outBounce
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */

export function outBounce(t: number, b: number, c: number, d: number) : number {
  if ((t /= d) < 1 / 2.75) {
    return c * (7.5625 * t * t) + b;
  }

  if (t < 2 / 2.75) {
    return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
  }

  if (t < 2.5 / 2.75) {
    return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
  }

  return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
};



/**
 * inBounce
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function inBounce(t: number, b: number, c: number, d: number) : number {
  return c - outBounce(d - t, 0, c, d) + b;
};



/**
 * inOutBounce
 * @param t currentTime 当前已进行时间
 * @param b startValue 起点值
 * @param c changeValue 总改变值
 * @param d duration 总花费时间
 */
export function inOutBounce(t: number, b: number, c: number, d: number) : number {
  if (t < d / 2) return inBounce(t * 2, 0, c, d) * 0.5 + b;
  return outBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
};
