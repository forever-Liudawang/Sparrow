// eslint-disable-next-line import/prefer-default-export
export function drawRedRect(svg) {
  let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', 0);
  rect.setAttribute('y', 0);
  rect.setAttribute('fill', 'red');
  rect.setAttribute('width', 100);
  rect.setAttribute('height', 100);
  svg.appendChild(rect);
}
