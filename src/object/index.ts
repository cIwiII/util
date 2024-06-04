

export function assign(...args: any[]) {
  if (Object.assign) {
    return Object.assign(this, arguments);
  }

  function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  }

  return __assign.apply(this, arguments);
}

export function spreadArrays(...args: any) {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
}

/**
 * 获取对象数据
 * @param object 对象
 * @param prop 字段 (支持以.分隔的N级字段，如: a.b.c或a.b.[0].c)
 */
export function getObjectValue<T = any>(object: Record<string, any>, prop: string): T {
  var props = prop.split(".");

  var value = object[props[0]];

  props.slice(1).forEach(function (prop) {
    if(value){
      if (/\[\d+]/.test(prop)) {
        // 针对数组做截取, slice 移除 []
        value = value[prop.slice(1, prop.length - 1)];
      } else {
        value = value[prop];
      }
    }
  });

  return value;
}

/**
 * 设置对象数据
 * @type T 对象类型
 * @param object 对象
 * @param prop 字段 (支持以.分隔的N级字段，如: a.b.c或a.b.[0].c)
 * @param value 字段数据
 */
export function setObjectValue<T extends Record<string, any>>(object: T, prop: string, value: any): T {
  let _a, _b;

  const props = prop.split(".");

  if (props.length === 1) return assign(assign({}, object), ((_a = {}), (_a[props[0]] = value), _a));

  var propValue = /\[\d+]/.test(props[1])
    ? spreadArrays(object[props[0]] || [])
    : assign({}, object[props[0]] || {});

  var newObject = assign(assign({}, object), ((_b = {}), (_b[props[0]] = propValue), _b));

  props.slice(1).forEach(function (prop, index) {
    // 数组
    var isArray = /\[\d+]/.test(prop);
    if (isArray) prop = prop.slice(1, prop.length - 1); // 写入最后一级

    if (index === props.length - 2) {
      propValue[prop] = value;
    } // 记录上一级
    else {
      // 下一级是否为数组
      var nextIsArray = /\[\d+]/.test(props[index + 2]);
      propValue[prop] = nextIsArray ? spreadArrays(propValue[prop] || []) : assign({}, propValue[prop] || {});
      propValue = propValue[prop];
    }
  });
  return newObject;
}

/**
 * 删除对象键
 * @param object 对象
 * @param props 键
 */
export function deleteObjectKeys<T extends Record<string, any>>(object: T, props: string[]): T {
  var newObject = assign({}, object);

  props.forEach(function (prop) {
    delete newObject[prop];
  });
  return newObject;
}

/**
 * 对象深拷贝
 *
 * @param object
 * @returns object
 */
function deepCopy<T extends any>(p: T, c: any = {}):T {
  for (var i in p) {
    if (typeof p[i] === "object") {
      c[i] = (p[i] as object).constructor === Array ? [] : {};

      deepCopy(p[i], c[i]);
    } else {
      c[i] = p[i];
    }
  }

  return c;
}

/**
 * 深拷贝对象
 * @param object 目标对象
 * @return 新对象
 */
export function deepCloneObject<T extends Record<string, any> = Record<string, any>>(object: T): T {
  var result;

  if (typeof(object) === "object") {
    if (Array.isArray(object)) {
      result = [];

      for (var i = 0; i < object.length; i++) {
        // 递归克隆数组
        result.push(deepCloneObject(object[i]));
      }
    } else if (object === null) {
      result = null;
    } else if (object.constructor === RegExp) {
      result = object;
    } else {
      result = {};
      Object.keys(object).forEach(function (key) {
        // 递归克隆对象
        result[key] = deepCloneObject(object[key]);
      });
    }
  } else {
    result = object;
  }

  return result;
}

/**
 * 删除对象undefined值
 * @param object 目标对象
 * @return 新对象
 */
export function removeObjectUndefined<T extends Record<string, any> = Record<string, any>>(object?: T): T {
  const result = {};

  if (!object) {
    return result as T;
  }


  Object.keys(object).forEach(function (key) {
    if (object[key] !== undefined) result[key] = object[key];
  });

  return result as T;
}

