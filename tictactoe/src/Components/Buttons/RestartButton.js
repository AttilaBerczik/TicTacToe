import React from "react";

const RestartButton = (props) => {
    const startAgain = () => {
        //resets all states to restart the game
        props.setGrid({
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
        props.setLine([false]);
        props.setCurrentPlayer(true);
        props.setDraw(false);
    };
    return (
        <>
            <button
                type="button"
                onClick={() => startAgain()}
                className="btn btn-outline-primary btn-lg"
            >
                Restart game
            </button>
        </>
    );
};

export default RestartButton;
