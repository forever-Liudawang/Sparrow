import { mount, createSVGElement } from './utils';

export function createContext(width, height) {
  const svg = createSVGElement('svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute('viewBox', `0,0,${width},${height}`);

  // 添加到g元素上的转化会被应用到所有的子元素上
  const g = createSVGElement('g');
  mount(g, svg);
  return {
    node: svg,
    group: g,
  };
}
