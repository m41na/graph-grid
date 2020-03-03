const Tile = ({ pos: { row, col, mine }, width, value, handleClick }) => {

    const handleOnClick = (e, pos) => {
        if (!pos.mine) {
            e.target.classList.add('open');
        }
        else {
            e.target.classList.add('mine');
            console.log('Ka-Boom!!');
        }
        handleClick(pos)
    };

    return (
        <div className="tile" onClick={(e) => handleOnClick(e, {row, col, mine})}>
            <span>{value}</span>

            <style jsx>{`
                .tile{
                    height: ${width}px;
                    border: 1px solid red;
                    background-color: grey;
                    color: grey;
                    box-shadow: 3px 3px 5px 6px #ccc;
                    text-align: center;
                    vertical-align: middle;
                }

                .tile.open{
                    background-color: white;
                    color: black;
                    font-weight: bold;
                }

                .tile.mine{
                    background-color: red;
                    color: red;
                }
            `}
            </style>
        </div>
    )
};

export default Tile;