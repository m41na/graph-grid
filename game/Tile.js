const Tile = ({ pos: { row, col, mine }, width, value, done, handleClick }) => {
    console.log("tile (", row, ",", col, ") : done? ", done);
    const handleOnClick = (e, pos) => {
        e.preventDefault();
        if (!pos.mine) {
            if(!e.target.classList.contains("open")){
                e.target.classList.add('open');
                handleClick(pos);
            }
        }
        else {
            if(!e.target.classList.contains('mine')){
                e.target.classList.add('mine');
                handleClick(pos);
                console.log('Ka-Boom!!');
            }
        }
    };

    return (
        <div className={!done? "tile" : (mine? "tile mine" : "tile open")} onClick={(e) => handleOnClick(e, {row, col, mine})}>
            <span>{value}</span>

            <style jsx>{`
                .tile{
                    display: grid;
                    align-content: center;
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