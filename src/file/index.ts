

/**
 * 下载
 * @param url 文件地址
 */
export function download(url: string): void {
  let a = document.createElement('a');
  a.href = url;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

/**
 * 加载图片
 * @param src 图片地址
 * @return 图片
 */
export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise(function (resolve, reject) {
    let image = new Image();

    image.onload = function () {
      return resolve(image);
    };

    image.onerror = function () {
      let args:any[] = [];

      for (let _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return reject(args);
    };

    image.src = src;
  });
};

export interface moveFilesOptions{
    /**
   * 包含文件后缀
   */
    includeSuffixes?: string[] | undefined;
    /**
     * 不包含文件后缀 (优先级低于includeSuffixes)
     */
    excludeSuffixes?: string[] | undefined;
    /**
     * 包含关键字
     */
    includeKeywords?: string[] | undefined;
    /**
     * 不包含关键字
     */
    excludeKeywords?: string[] | undefined;
}
