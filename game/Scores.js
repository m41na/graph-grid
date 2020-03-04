const Scores = ({ scores: { clicks, points, increment, countdown } }) => (
    <div className="scores">
        <div className="clicks"><span>Clicks: {clicks}</span></div>
        <div className="points"><span>Points: {points}</span></div>
        <div className="clues"><span>Clues: {countdown}</span></div>
        <div className="earn"><span>Earn: +{increment}</span></div>

        <style jsx>{`
            .scores {
                display: grid;
                grid-auto-flow: column;
                height: 50px;
                font-size: 1.5em;
                font-weight: bold;
                margin-bottom: 10px;
            }
            .clicks, .points, .clues, .earn {
                text-align: center;
            }
            span {
                display:block;
                margin-top: 10px;
            }
        `}</style>
    </div>
);

export default Scores;