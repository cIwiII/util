/**
 *
 * @param name 需要获取的 query 属性，不传返回整个对象
 * @param url 默认 window.location.href
 * @returns
 * @example
 * const href = 'https://xxx.com/search?q=devpoint&page=1'
 * const search = '?q=devpoint&page=1'
 * const query = 'q=devpoint&page=1'
 *
 * const params = getParams('page')
 * const params = getParams('page', href)
 * const params = getParams('page', search)
 * const params = getParams('page', query)
 */
export function getParams(name?: string, url?: string) {
  if (url && typeof url !== "string") {
    console.error("url must be of string type");
    return null;
  }

  let params = {} as URLSearchParams;

  if (!url) {
    params = new URL(window.location.href).searchParams;
  } else if (url.startsWith("http")) {
    params = new URL(url).searchParams;
  } else if (url.startsWith("?")) {
    params = new URLSearchParams(url.substring(1));
  } else {
    params = new URLSearchParams(url);
  }

  const res = {};
  for (var pair of params.entries()) {
    try {
      res[pair[0]] = decodeURIComponent(pair[1]);
    } catch (error) {
      res[pair[0]] = "";
    }
  }

  if (name) {
    return res[name];
  }

  return res;
}

/**
 * 对象数据扁平化，数据扁平化为二维数组
 */
function paramHandles(obj = {}) {
  function toTypeString(value: any) {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
  }

  var params: any[] = [];

  function paramHandle(obj: any = {}, pkey?: string) {
    var type = toTypeString(obj);

    switch (type) {
      case "string":
      case "number":
      case "boolean":
        params.push([pkey, obj]);
        break;

      case "undefined":
      case "null":
        params.push([pkey, ""]);
        break;

      default:
        Object.entries(obj).forEach(function ([key, val]) {
          var nkey = pkey ? `${pkey}[${key}]` : key;
          type = toTypeString(val);

          switch(type){
            case 'object':
              paramHandle(val, nkey);
              break;
            
            case 'array':
              (val as Array<any>).forEach(function (v, i) {
                paramHandle(v, `${nkey}[${i}]`);
              });
              break;
            
            case 'undefined':
            case 'null':
              params.push([nkey, ""]);
              break;

            default:
              // val 是基本数据类型
              params.push([nkey, val]);
              break;

          }
        });
        break;
    }
  }

  paramHandle(obj);

  return params;
}

/**
 * 格式化链接参数
 * @param obj 请求参数对象
 */
export function formatUrlParams(obj: any): string {
  const params = paramHandles(obj);

  // 连接成字符串
  const res = params.reduce((str: string, v, index) => {
    // key 为假值，不拼接
    if (!v[0]) return str + "";

    var key = v[0];
    var value = v[1];

    try {
      key = decodeURIComponent(key);
    } catch (e) {
      //
    }

    try {
      value = decodeURIComponent(value);
    } catch (e) {
      //
    }

    if (index === params.length - 1) {
      // 最后一个不加 &
      return encodeURIComponent(key) + "=" + encodeURIComponent(value);
    }

    return encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
  }, "");

  return res;
}



/**
 * 比对pathname和设定的路径是否匹配
 * @param pathname location的pathname
 * @param path 路径 (遵循路由路径规则 /xxx/:param)
 * @param basename 基础路由 (默认为/)
 * @return 是否匹配
 */
export function isEqualPath(pathname: string, path: string, basename: string = "/"): boolean {

  path = path.split("?")[0];
  if (path[0] !== "/") path = "/" + path;
  if (basename !== "/") path = "" + (basename[0] === "/" ? basename : "/" + basename) + path;
  var pathnameList = pathname.split("/");
  var pathList = path.split("/");
  if (pathnameList.length > pathList.length) return false;

  for (var i = 0; i < pathnameList.length; i++) {
    // :为匹配参数
    if (pathnameList[i] !== pathList[i] && pathList[i][0] !== ":") return false;
  }

  if (pathnameList.length !== pathList.length) {
    pathList = pathList.slice(pathnameList.length);

    for (var i = 0; i < pathList.length; i++) {
      // 检查可选参数
      if (pathList[i].indexOf("?") === -1) return false;
    }
  }

  return true;
}