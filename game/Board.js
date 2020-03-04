import Tile from './Tile';
import Scores from './Scores';
import Setup from './Setup';
import { useState } from 'react';
const { countMinesHint, calcScore, saveScore } = require('./Graph');

const generateTile = (id, pos, width, value, done, handleClick) => <Tile key={id} pos={pos} width={width} value={value} done={done} handleClick={handleClick} />

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

const Board = ({ tiles: { mines, adjacency, size, count }, width, ready, onSetup, onReady }) => {
    console.log("Hints countdown: ", count);
    const [scores, setScores] = useState({ clicks: 0, points: 0, increment: 1, countdown: (size * size - count) });

    const handleTileClicked = (tile) => {
        console.log('clicked', tile);
        if (tile.mine === false) {
            setScores({ points: (scores.points + scores.increment), clicks: (scores.clicks + 1), increment: (scores.increment + 1), countdown: (scores.countdown - 1) });
        }
        else {
            setScores({ points: (scores.points - scores.increment), clicks: (scores.clicks + 1), increment: 1, countdown: scores.countdown });
        }
    }

    let done = scores.countdown === 0;
    let grid = [];
    for (let i = 0; i < mines.length; i += size) {
        let row = [];
        for (let j = i; j < (i + size); j++) {
            let { r, c, mine } = mines[j];
            const key = "" + r + c;
            console.log('mines[', j, ']', mines[j], 'i', i, 'r', r, 'c', c);
            let value = countMinesHint(adjacency[j]);
            row.push(generateTile(key, { row: r, col: c, mine }, width, value, done, handleTileClicked));
        }
        grid.push(generateRow(i, size, row));
    }

    if (done) {
        saveScore(calcScore(scores, count, (size * size)));
    }

    return (
        <div className="board">
            <Scores scores={scores} />
            <Setup onSetup={onSetup} onReady={onReady} />
            {ready? (
            <div className="grid">
                {grid}
            </div>
            ): null }
            <style jsx>{`
                .board {
                    border: 1px solid;
                    border-radius: 5px 5px 0 0;
                }
                .grid {
                    display: grid;
                    grid-auto-flow: row;
                }
            `}</style>
        </div>
    );
};

export default Board;