let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
let plane = document.querySelector('.plane');
let pathCoords = 
    `M0 0 C 40 10, 165 10, 450 280 S 700 250, ${document.documentElement.clientWidth} ${document.documentElement.clientHeight}`;
path.setAttribute('d', pathCoords);
plane.style.offsetPath = `path('${pathCoords}')`;
document.getElementsByTagName('svg')[0].appendChild(path);


