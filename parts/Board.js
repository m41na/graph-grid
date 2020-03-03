import Tile from './Tile';
const { createAdjacencyList, createVertices, generateMines, calcIndex } = require('../parts/Graph');

const handleTileClicked = (tile) => {
    console.log('clicked', tile);
}

const generateTile = (id, pos, width, handleClick) => <Tile key={id} pos={pos} width={width} handleClick={handleClick} />

const generateRow = (i, size, row) => (
    <div key={Math.floor(i/size)} className="row">
        {row}
        <style jsx>{`
            .row {
                display: grid;
                grid-auto-flow: column;
            }
        `}</style>
    </div>
);

const Board = ({ size, width, count }) => {
    const vertices = createVertices(size);
    const mines = generateMines(count, (size * size), vertices);
    const adjacency = createAdjacencyList(mines, size);
    let grid = [];
    for (let i = 0; i < mines.length; i+=size) {
        let row = [];
        for(let j = i; j < (i + size); j++){
            let { r, c, mine } = mines[j];
            const key = "" + r + c;
            console.log('mines[', j,']', mines[j], 'i', i, 'r', r, 'c', c);
            row.push(generateTile(key, { row: r, col: c, mine }, width, handleTileClicked));
        }
        grid.push(generateRow(i, size, row));
    }

    return (
        <div className="grid">
            {grid}
            <style jsx>{`
                .grid {
                    display: grid;
                    grid-auto-flow: row;
                }
            `}</style>
        </div>
    );
};

export default Board;