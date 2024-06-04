
/**
 * 获取cookie值
 * @param name cookie名
 */
function getCookie(name: string):string {
  var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  var arr = document.cookie.match(reg);
  if (arr && decodeURIComponent){
    return decodeURIComponent(arr[2]);
  }
  return '';
};

function getCookie1(name: string):string{        
  var cookies = document.cookie.split(';');        
  for(var i=0; i<cookies.length; i++){        
      var cookie = cookies[i].trim();        
      if(cookie.startsWith(name + '=')){
        return cookie.substring(name.length + 1); 
      }       
  }        
  return "";        
}


/**
 * 
 * @param {*} name cookie 名
 * @param {*} value cookie 值
 * @param {*} exdays cookie过期天数
 */
export function setCookie(name: string,value: string,exdays: number){        
  var d = new Date();        
  d.setTime(d.getTime()+(exdays*24*60*60*1000));        
  var expires = "expires="+d.toUTCString();        
  document.cookie = name + "=" + value + "; " + expires;        
}