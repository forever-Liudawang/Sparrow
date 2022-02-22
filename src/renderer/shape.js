import { mount, createSVGElement, applyAttributes } from './utils';

export function shape(type, context, attributes) {
  const { group } = context;
  const el = createSVGElement(type);
  applyAttributes(el, attributes);
  mount(group, el);
  return el;
}
export function line(context, attributes) {
  return shape('line', context, attributes);
}
export function rect(context, attributes) {
  const {
    width, height, x, y,
  } = attributes;
  return shape('rect', context, {
    ...attributes,
    width: Math.abs(width),
    height: Math.abs(height),
    x: width > 0 ? x : x + width,
    y: height > 0 ? y : y + height,
  });
}
export function circle(context, attributes) {
  return shape('circle', context, attributes);
}
export function text(context, attributes) {
  // eslint-disable-next-line no-shadow
  const { text, ...rest } = attributes;
  const textElement = shape('text', context, rest);
  textElement.textContent = text;
  return textElement;
}

// [
//  ['M', 10, 10],
//  ['L', 100, 100],
//  ['L', 100, 10],
//  ['Z'],
// ];
// 上面的二维数组会被转换成如下的字符串
// 'M 10 10 L 100 100 L 100 10 Z'

// https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths
export function path(context, attributes) {
  const { d } = attributes;
  return shape('path', context, { ...attributes, d: d.flat().join(' ') });
}
