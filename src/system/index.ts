

/**
 * 比较系统版本号
 * @param curV 当前版本号
 * @param reqV 被比较版本号
 * @return 比较后结果，当前版本号大于被比较版本号：‘greater’，小于被比较版本号: ‘less’, 等于被比较版本号：‘equal’，版本号输入错误：‘curV error’，‘reqV error’
 */
export function versionCompare(curV: string | number, reqV: string | number): string {
  // 将两个版本号拆成数字
  var arr1 = curV.toString().split('.');
  var arr2 = reqV.toString().split('.'); // 取最小长度

  var minLength = Math.min(arr1.length, arr2.length);
  var diff = 0; // 版本号位数

  var curIndex = 0;
  var reqIndex = 0;

  while (curIndex < arr1.length) {
    // 判断每一位是否为正整数
    if (!/^\+?[0-9][0-9]*$/.test(arr1[curIndex])) {
      return 'curV error';
    }

    curIndex++;
  }

  while (reqIndex < arr2.length) {
    if (!/^\+?[0-9][0-9]*$/.test(arr2[reqIndex])) {
      return 'reqV error';
    }

    reqIndex++;
  } // 比较版本号每一位，当对比不同时跳出循环


  for (var i = 0; i < minLength; i++) {
    if (Number(arr1[i]) - Number(arr2[i]) !== 0) {
      diff = Number(arr1[i]) - Number(arr2[i]);
      break;
    } else {
      diff = Number(arr1[i]) - Number(arr2[i]);
    }
  }

  diff = diff !== 0 ? diff : arr1.length - arr2.length;
  return diff > 0 ? 'greater' : diff === 0 ? 'equal' : 'less';
}


/**
 * 获取一组工厂函数的结果
 * @param factories 工厂函数
 * @param initResult 初始结果
 * @return 结果
 */
export function getFactoryResult<T = any>(factories: ((defaultResult: T) => T)[], initResult: T): T{
  var result = initResult;

  for (var i = 0; i < factories.length; i++) {
    result = factories[i](result);
  }

  return result;
};
