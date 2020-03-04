import Layout from '../components/Layout';
import Board from '../parts/Board';
const { createAdjacencyList, createVertices, generateMines } = require('../parts/Graph');

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
            <Board tiles={generateGrid(10, 30)} width={100} />
        </Layout>
    );
}