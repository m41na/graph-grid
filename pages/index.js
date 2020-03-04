import Layout from '../components/Layout';
import Board from '../game/Board';
const { createAdjacencyList, createVertices, generateMines } = require('../game/Graph');

const generateGrid = (size, count) => {
    const vertices = createVertices(size);
    const mines = generateMines(count, (size * size), vertices);
    const adjacency = createAdjacencyList(mines, size);
    return ({
        vertices, mines, adjacency, size, count
    })
}

export default function Index() {
    return (
        <Layout>
            <Board tiles={generateGrid(5, 10)} width={100} />
        </Layout>
    );
}