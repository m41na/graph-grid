import Tile from './Tile';
import Scores from './Scores';
import { useState } from 'react';
const { countMinesHint } = require('../parts/Graph');

const generateTile = (id, pos, width, value, handleClick) => <Tile key={id} pos={pos} width={width} value={value} handleClick={handleClick} />

const generateRow = (i, size, row) => (
    <div key={Math.floor(i / size)} className="row">
        {row}
        <style jsx>{`
            .row {
                display: grid;
                grid-auto-flow: column;
            }
        `}</style>
    </div>
);

const Board = ({ tiles: { mines, adjacency, size, count }, width }) => {
    const [scores, setScores] = useState({ clicks: 0, points: 0, increment: 1 });
    const [countdown, setCountdown] = useState(count);

    const handleTileClicked = (tile) => {
        console.log('clicked', tile);
        if (tile.mine === false) {
            setScores({ points: (scores.points + scores.increment), clicks: (scores.clicks + 1), increment: (scores.increment + 1) });
        }
        else {
            setScores({ points: (scores.points - scores.increment), clicks: (scores.clicks + 1), increment: 1 });
            setCountdown(countdown - 1);
        }
    }

    let grid = [];
    for (let i = 0; i < mines.length; i += size) {
        let row = [];
        for (let j = i; j < (i + size); j++) {
            let { r, c, mine } = mines[j];
            const key = "" + r + c;
            console.log('mines[', j, ']', mines[j], 'i', i, 'r', r, 'c', c);
            let value = countMinesHint(adjacency[j]);
            row.push(generateTile(key, { row: r, col: c, mine }, width, value, handleTileClicked));
        }
        grid.push(generateRow(i, size, row));
    }

    return (
        <div className="board">
            <Scores scores={scores} />
            <div className="grid">
                {grid}
                <style jsx>{`
                .grid {
                    display: grid;
                    grid-auto-flow: row;
                }
            `}</style>
            </div>
        </div>
    );
};

export default Board;