
import axios from "axios";

const getExtByMIME = (mime) => {
  const mimeMap = {
    "application/x-abiword": ".abw",
    "application/x-freearc": ".arc",
    "application/vnd.amazon.ebook": ".azw",
    "application/octet-stream": ".bin",
    "application/x-bzip": ".bz",
    "application/x-bzip2": ".bz2",
    "application/x-csh": ".csh",
    "application/msword": ".doc",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      ".docx",
    "application/vnd.ms-fontobject": ".eot",
    "application/epub+zip": ".epub",
    "application/gzip": ".gz",
    "application/java-archive": ".jar",
    "application/json": ".json",
    "application/ld+json": ".jsonld",
    "application/vnd.apple.installer+xml": ".mpkg",
    "application/vnd.oasis.opendocument.presentation": ".odp",
    "application/vnd.oasis.opendocument.spreadsheet": ".ods",
    "application/vnd.oasis.opendocument.text": ".odt",
    "application/ogg": ".ogx",
    "application/pdf": ".pdf",
    "application/php": ".php",
    "application/vnd.ms-powerpoint": ".ppt",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      ".pptx",
    "application/vnd.rar": ".rar",
    "application/rtf": ".rtf",
    "application/x-sh": ".sh",
    "application/x-shockwave-flash": ".swf",
    "application/x-tar": ".tar",
    "application/vnd.visio": ".vsd",
    "application/xhtml+xml": ".xhtml",
    "application/vnd.ms-excel": ".xls",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      ".xlsx",
    "application/xml if not readable from casual users (RFC 3023, section 3)":
      ".xml",
    "application/vnd.mozilla.xul+xml": ".xul",
    "application/zip": ".zip",
    "application/x-7z-compressed": ".7z",
    "image/bmp": ".bmp",
    "image/gif": ".gif",
    "image/vnd.microsoft.icon": ".ico",
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/svg+xml": ".svg",
    "image/tiff": ".tiff",
    "image/webp.bmp	Windows OS/2 Bitmap Graphics	image/bmp": ".webp",
    "image/webp": ".webp",
    "text/css": ".css",
    "text/csv": ".csv",
    "text/html": ".html",
    "text/calendar": ".ics",
    "text/javascript": ".js", // ".mjs"
    "text/plain": ".txt",
    "font/otf": ".otf",
    "font/ttf": ".ttf",
    "font/woff": ".woff",
    "font/woff2": ".woff2",
  };
  return mimeMap[mime];
};

export class Download {
  get(url, fileName) {
    return axios({
      method: "GET",
      url: url,
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      const blob = new Blob([res.data]);
      const downloadElement = document.createElement("a");
      const href = window.URL.createObjectURL(blob); // 创建下载的链接
      downloadElement.href = href;
      downloadElement.download =
        fileName ||
        res.headers["x-reqid"] + getExtByMIME(res.headers["content-type"]); // 下载后文件名
      document.body.appendChild(downloadElement); // 追加a标签
      downloadElement.click(); // 点击下载
      document.body.removeChild(downloadElement); // 下载完成移除元素
      window.URL.revokeObjectURL(href); // 释放掉blob对象
    });
  }
}

export default Download;

export const download = new Download().get;
