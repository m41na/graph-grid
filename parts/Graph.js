const createVertices = (size) => {
    let total = size * size;
    const vertices = new Array(total);
    for (let i = 0; i < total; i++) {
        let r = Math.floor(i / size);
        let c = i % size;
        vertices[i] = ({ r, c, i, mine: false });
    }
    return vertices;
}

const generateMines = (count, max, vertices) => {
    if (count <= max) {
        for (let i = 0; i < count; i++) {
            let v = Math.floor(Math.random() * Math.floor(max));
            while (vertices[v].mine === true) {
                v = Math.floor(Math.random() * Math.floor(max));
                console.log('trying again for index', v);
            }
            vertices[v].mine = true;
        }
        return vertices;
    }
    else {
        throw Error('max should be more than or at the very least equal to the count');
    }
}

const createAdjacencyList = (vertices, max) => {
    const adjacency = [];
    for (let i = 0; i < vertices.length; i++) {
        let vertex = vertices[i];
        let neighbours = [];
        let { r, c } = vertex;
        //check NW
        if ((r - 1) >= 0 && (c - 1) >= 0) {
            neighbours.push(vertices[i - max - 1]);
        }
        //check N
        if ((r - 1) >= 0) {
            neighbours.push(vertices[i - max]);
        }
        //check NE
        if ((r - 1) >= 0 && (c + 1) < max) {
            neighbours.push(vertices[i - max + 1]);
        }
        //check W
        if ((c - 1) >= 0) {
            neighbours.push(vertices[i - 1]);
        }
        //check E
        if ((c + 1) < max) {
            neighbours.push(vertices[i + 1]);
        }
        //check SW
        if ((r + 1) < max && (c - 1) >= 0) {
            neighbours.push(vertices[i + max - 1]);
        }
        //check S
        if ((r + 1) < max) {
            neighbours.push(vertices[i + max]);
        }
        //check SE
        if ((r + 1) < max && (c + 1) < max) {
            neighbours.push(vertices[i + max + 1]);
        }
        adjacency.push(neighbours);
    }
    return adjacency;
}

const calcIndex = (size, r, c) => size * r + c;

const countMinesHint = (neighbours) => {
    console.log('checking neighbours for ', neighbours);
    return neighbours && neighbours.length ?
        neighbours.filter(v => v.mine === true).length :
        0;
}

module.exports = { createVertices, createAdjacencyList, generateMines, calcIndex, countMinesHint };