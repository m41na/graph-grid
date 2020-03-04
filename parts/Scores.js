const Scores = ({scores: {clicks, points, increment}}) => (
    <div className="scores">
        <div className="clicks">Clicks: {clicks}</div>
        <div className="points">Points: {points}</div>
        <div className="clicks">Earn: +{increment}</div>

        <style jsx>{`
            .scores {
                display: grid;
                grid-auto-flow: column;
                height: 50px;
            }

            .clicks {
                font-size: 2em;
                font-weight: bold;
            }

            .points {
                font-size: 2em;
                font-weight: bold;
            }
        `}</style>
    </div>
);

export default Scores;