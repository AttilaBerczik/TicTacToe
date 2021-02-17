import React, { useState } from "react";
import "./App.css";
import Grid from "./grid/Grid";


const App = () => {
    const [grid, setGrid] = useState({
        //0 is nothing, 1 cross and 2 circle
        A1: 0,
        A2: 0,
        A3: 0,

        B1: 0,
        B2: 0,
        B3: 0,

        C1: 0,
        C2: 0,
        C3: 0,
    });
    const [currentPlayer, setCurrentPlayer] = useState(true); //true is the player, false is the machine
    const [line, setLine] = useState([false]);
    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col col-lg-2"></div>
                        <div className="col-xl-7">
                            Tic-tac-toe
                            <Grid
                                grid={grid}
                                click={setGrid}
                                currentPlayer={currentPlayer}
                                setCurrentPlayer={setCurrentPlayer}
                                line={line}
                                setLine={setLine}
                            />
                        </div>
                        <div className="col col-lg-2"></div>
                    </div>
                </div>
            </header>
        </div>
    );
};
export default App;
