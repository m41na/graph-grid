import { useState } from "react";

const Setup = ({ onSetup, onReady }) => {

    const [setup, updateSetup] = useState({ show: false, size: 5, count: 12, width: 100 });
    const { show, size, count, width } = setup;

    const handleChange = (e) => {
        updateSetup({ ...setup, [e.target.id]: e.target.value });
    }

    const toggleShow = () => {
        updateSetup({...setup, show: !setup.show});
        onReady();
    }

    const handleUpdate = (e) => {
        onSetup({size, count, width});
        updateSetup({...setup, show: false});
    }

    return (
        <div className="setup">
            <div className="show">
                <button onClick={toggleShow}><i>{show? "-" : "+"}</i></button>
            </div>
            {show? (
                <form>
                    <div className="input-text">
                        <label htmlFor="size">Size</label>
                        <input type="text" id="size" value={size} onChange={handleChange} maxLength="2" />
                    </div>
                    <div className="input-text">
                        <label htmlFor="count">Size</label>
                        <input type="text" id="count" value={count} onChange={handleChange} maxLength="2" />
                    </div>
                    <div className="input-text">
                        <label htmlFor="width">Width</label>
                        <input type="text" id="width" value={width} onChange={handleChange} maxLength="3" />
                    </div>
                    <div className="submit">
                        <input type="button" value="Update" onClick={handleUpdate} />
                    </div>
                </form>
            ) : null}
            

            <style jsx>{`
                .setup{
                    display: grid;
                    grid-template-columns: 30px auto;
                    padding: 12px;
                    border-top: 1px solid;
                    background-color: aliceblue;
                }

                .show button {
                    border-radius: 5px;
                    padding: 5px;
                }

                form{
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                }

                form label {
                    display: inline-block;
                    padding: 5px 5px;
                }

                form input[type=text] {
                    border-radius: 5px;
                    padding: 5px;
                }

                form input[type=button] {
                    border-radius: 5px;
                    padding: 5px;
                }
            `}</style>
        </div>
    )
}

export default Setup;