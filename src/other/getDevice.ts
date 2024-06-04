/**
 * 
 * @return 设备类型
 */
export let getDevice = ():string => {
    let agent = navigator.userAgent.toLowerCase();
    let result = 'other';

    if (/windows/.test(agent)) {
        result = 'windows pc';
    } else if (/iphone|ipod/.test(agent) && /mobile/.test(agent)) {
        result = 'iphone';
    } else if (/ipad/.test(agent) && /mobile/.test(agent)) {
        result = 'ipad';
    } else if (/android/.test(agent) && /mobile/.test(agent)) {
        result = 'android';
    } else if (/linux/.test(agent)) {
        result = 'linux pc';
    } else if (/mac/.test(agent)) {
        result = 'mac';
    } else {
        result = 'other';
    }

    return result;
};
