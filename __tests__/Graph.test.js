const { 
    createVertices, createAdjacencyList, generateMines, 
    calcIndex, countMinesHint, calcScore, saveScore 
} = require('../game/Graph');

describe('test creating vertices', () => {

    const max = 5;
    const count = 10;

    test('test createVertices function', () => {
        let vertices = createVertices(max);
        console.log(vertices);
    });

    test('test generateMines function', () => {
        let vertices = generateMines(count, (max * max), createVertices(max));
        console.log(vertices);
        expect(vertices.filter(v => v.mine).length).toBe(count);
    });

    test('test createAdjacencyList function', () => {
        let vertices = createVertices(max);
        let nodes = generateMines(count, (max * max), vertices);
        let adjacency = createAdjacencyList(nodes, max);
        console.log(adjacency);
    });

    test('test calcIndex function', () => {
        let vertices = createVertices(max);
        vertices.forEach(v => {
            let { r, c } = v;
            expect(calcIndex(max, r, c)).toBe(v.i)
        })
    });

    test('test countMinesHint function', () => {
        let vertices = createVertices(max);
        let nodes = generateMines(count, (max * max), vertices);
        let adjacency = createAdjacencyList(nodes, max);
        console.log(adjacency);
        let counts = adjacency.map((v, i) => ({ i, count: countMinesHint(v) }));
        console.log(counts);
    });

    test('test calcScore function', () => {
        let tally = { points: 1600, clicks: 90 };
        let score = calcScore(tally, 30, 100);
        console.log('score: ', score);
    });

    test('test saveScore function', () => {
        let score = 453;
        let scores = saveScore(score);
        console.log('scores: ', scores);
    });
});