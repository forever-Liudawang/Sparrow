/* eslint-disable no-restricted-syntax */
/* eslint-disable indent */
// 创建带有命名空间的元素节点
export function createSVGElement(type) {
  return document.createElementNS('http://www.w3.org/2000/svg', type);
}
export function mount(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}
export function applyAttributes(element, attributes) {
    // 这里需要把类似 strokeWidth 的属性转换成 stroke-width 的形式
    // https://juejin.cn/post/6844903487155732494
   for (const [key, value] of Object.entries(attributes)) {
    const kebabCaseKey = key.replace(/[A-Z]/g, (d) => `-${d.toLocaleLowerCase()}`);
    element.setAttribute(kebabCaseKey, value);
   }
}
