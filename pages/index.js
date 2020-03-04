import Layout from '../components/Layout';
import Board from '../game/Board';
import { useState } from 'react';
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
    const [ready, setReady] = useState(true);
    const [start, setStart] = useState({size: 5, count: 10, width: 100})

    const updateStart = (start) => {
        setStart({size: parseInt(start.size), count: parseInt(start.count), width: parseInt(start.width)});
        setReady(true);
        console.log('updating start params', start);
    }

    const updateReady = () => {
        setReady(false)
        console.log('reset request')
    }

    const { size, count, width } = start;
    return (
        <Layout>
            <Board tiles={generateGrid(size, count)} width={width} ready={ready} onSetup={updateStart} onReady={updateReady} />
        </Layout>
    );
}