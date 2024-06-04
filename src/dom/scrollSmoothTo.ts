export const RAF = window.requestAnimationFrame || ((callback:() => void) => {
  window.setTimeout(callback, 1000 / 60);
});


/* note：原生的又可以设置跳转动画，但部分版本或浏览器存在兼容问题，包括相同浏览器也会有兼容性问题
{
  behavior: "auto" | "instant" | "smooth", // 默认 auto
  block: "start" | "center" | "end" | "nearest", // 默认 center
  inline: "start" | "center" | "end" | "nearest", // 默认 nearest
}

使用如下方法重写锚跳转动画

const scrollToAnchor = (anchorname:any) =>{
    if(anchorname){ //元素id
        const anchorElement = document.getElementById(anchorname); //找到滚动到的元素
        if(anchorElement){
            anchorElement.scrollIntoView({behavior:'smooth',block:'start'}); // 让页面滚动到元素所在位置
        }
    }
}
*/

/**
 * 锚跳转动画，重写
 * @param scrollContent 
 * @param param1 
 * @param callback 
 * @returns 
 */
export function scrollSmoothTo(
  scrollContent: Element | null,
  {x, y}: { x: number; y: number },
  callback?: ()=> void,
) {
  if(!scrollContent) return;
  const locaNode = scrollContent || window;
  let scrollPosition = 0;
  let position = 0;
  if(x >= 0) {
      scrollPosition = locaNode.scrollLeft;
      position = x;
  }
  if(y >= 0) {
      scrollPosition = locaNode.scrollTop;
      position = y;
  }
  const step = () => {
      if(!locaNode.scrollTop) return;
      //距离目标滚动距离
      const distance = position - scrollPosition;
      //目标滚定位置
      scrollPosition += distance / 6;
      if(Math.abs(distance) < 1) {
          locaNode.scrollTo(x, y);
          if(callback) callback();
      }else {
          locaNode.scrollTo(
              x >= 0 ? scrollPosition : 0,
              y >= 0 ?  scrollPosition : 0,
          )
          RAF(step);
      }
  };
  step();
}