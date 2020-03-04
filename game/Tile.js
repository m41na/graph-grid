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
        <a href="#" className={!done? "tile" : (mine? "tile mine" : "tile open")} onClick={(e) => handleOnClick(e, {row, col, mine})}>
            {value}

            <style jsx>{`
                .tile{
                    display: grid;
                    align-content: center;
                    height: ${width}px;
                    border: 1px solid red;
                    background-color: grey;
                    color: grey;
                    text-decoration: none;
                    font-weight: bold;
                    font-size: 2em;
                    text-align: center;
                }

                .tile.open{
                    background-color: white;
                    color: black;
                }

                .tile.mine{
                    background-color: red;
                    color: red;
                }
            `}
            </style>
        </a>
    )
};

export default Tile;