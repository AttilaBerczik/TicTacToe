import React from 'react'

const RestartScoreButton = (props) => {
    //if restart score button is pushed this function restart the score
    const restartScore = () => {
        props.setScore([0, 0, 0]);
    }
    return (
        <>
            <button
                type="button"
                onClick={() => restartScore()}
                className="btn btn-outline-primary btn-lg"
            >
                Restart score
            </button>
        </>
    )
}

export default RestartScoreButton;
