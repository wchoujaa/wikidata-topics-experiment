let data = [], width = 600, height = 400, numPoints = 100;


const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-width / 2, -height / 2, width, height])
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;");


    const g = svg.append("g");

document.body.appendChild(svg.node());


let zoom = d3.zoom()
    .scaleExtent([1, 5])
    .translateExtent([[0, 0], [width, height]])
    .on('zoom', handleZoom);

function updateData() {
    data = [];
    for (let i = 0; i < numPoints; i++) {
        data.push({
            id: i,
            x: Math.random() * width,
            y: Math.random() * height
        });
    }
}

function initZoom() {
    d3.select('svg')
        .call(zoom);
}

function handleZoom(e) {
    d3.select('svg g')
        .attr('transform', e.transform);
}

function update() {
    d3.select('svg g')
        .selectAll('circle')
        .data(data)
        .join('circle')
        .attr('cx', function (d) { return d.x; })
        .attr('cy', function (d) { return d.y; })
        .attr('r', 3);
}

initZoom();
updateData();
update();



