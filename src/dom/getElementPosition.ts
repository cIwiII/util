/**
 * @description 通过递归实现方案, 元素距离文档document顶部的距离
 * @param 传入节点，返回改节点的位置对象，
 * @param ele
 * @returns  { left: 0, top: 0}
 */
export const offset = (ele: Element) => {
  const result = { left: 0, top: 0 };

  const getOffset = (node: Element, init?: boolean) => {
    if (node.nodeType != Node.ELEMENT_NODE) {
      return;
    }

    const position = window.getComputedStyle(node)["position"];

    if (typeof init === "undefined" && position === "static") {
      getOffset(node.parentNode as Element);
      return;
    }

    //累计计算该元素到父元素之间的距离
    result.top = (node as any).offsetTop + result.top - node.scrollTop;
    result.left = (node as any).offsetLeft + result.left - node.scrollLeft;

    if (position === "fixed") {
      return;
    }

    getOffset(node.parentNode as Element);

    if (window.getComputedStyle(ele)["display"] === "none") {
      return result;
    }
  };

  getOffset(ele, true);

  return result;
};

/**
 * getBoundingClientRect API 实现, 元素距离文档document顶部的距离
 * @param ele
 * @returns
 */
export const offset1 = ele => {
  let result = { left: 0, top: 0 };

  if (ele && !ele.getClientRects().length) {
    return result;
  }

  if (window.getComputedStyle(ele)["display"] === "none") {
    return result;
  }

  result = ele.getBoundingClientRect();
  var docElement = ele.ownerDocument?.documentElement;

  return {
    top: result.top + window.pageYOffset - docElement.clientTop,
    left: result.left + window.pageXOffset - docElement.clientLeft
  };
};

//扩展参考
const distanceToTop = ele => {
  let x = 0;
  while ((ele = ele.parentElement)) {
    x += ele.offsetTop;
  }
  return x;
};

// html、js使用

/* 
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<script src="./distance.js"></script>
	</head>
	<style>
		#box1{
			background-color: aqua;
			width:500px;
			height:1200px;
			position:relative;
			left:10px;
			top:10px;
		}
		#box2{
			background-color: pink;
			width:400px;
			position:absolute;
			top:50px;
			left:50px;
			height:50px;
		}
	</style>
	<body>
		<div id="box1">
			<div id="box2"></div>
		</div>
		<script>
			window.addEventListener("load",function(){
				 let element=document.getElementById('box2')
				 console.info(element)
				 offset1(element)
				 // offset(element)
			})
		</script>
	</body>
</html>

*/
