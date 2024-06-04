/** 是否触底, 默认矫正20px */
const scrollToBottom = (correct: number = 20): boolean => {
  // 距离顶部高度
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  // 可视高度
  const windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
  // 总高度
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  return scrollTop + windowHeight >= scrollHeight - correct;
};
