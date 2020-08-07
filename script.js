let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
let pathCoords = `M0 0 500 200 600 700 L${document.documentElement.clientWidth} ${document.documentElement.clientHeight}`;

path.setAttribute('d', pathCoords);
path.setAttribute('fill', 'none');
path.setAttribute('stroke', '#000000');
path.setAttribute('stroke-width', 2);
path.setAttribute('id', 'path');

document.getElementsByTagName('svg')[0].appendChild(path);

console.log(path)

