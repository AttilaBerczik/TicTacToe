import React, { Component, useState } from "react";
import Cell from "./cell/Cell";
import "./Grid.css";
import LineTo from "react-lineto";
import checkIfGameEnds from "../../logic/CheckIfGameEnds";
import WinnerModal from "../Modals/WinnerModal";
import LoserModal from "../Modals/LoserModal";
import DrawModal from "../Modals/DrawModal";

const Grid = (props) => {
    const [winnerModal, showWinnerModal] = useState(false);
    const [loserModal, showLoserModal] = useState(false);
    const [drawModal, showDrawModal] = useState(false);

    const restartGame = () => {
        //function that restarts the whole game, except the scores
        props.click({
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

    const lineVisible = () => {
        //this makes the line visible over the solution, once we've got a solution
        if (props.line[0]) {
            return (
                <LineTo
                    from={props.line[1]}
                    to={props.line[2]}
                    borderWidth="4px"
                    borderColor="#dee2e6"
                />
            );
        } else {
            return <></>;
        }
    };

    const squareVisible = (cellID) => {
        //makes the square invisible if there is a circle or cross, so we keep the nice table form
        const keys = Object.keys(props.grid);
        const values = Object.values(props.grid);
        const searchedKey = keys.indexOf(cellID);
        const searchedValue = values[searchedKey];
        if (searchedValue == 0) {
            return <div></div>;
        } else if (searchedValue == 1 || searchedValue == 2) {
            return <></>;
        }
    };

    const squareClicked = (divID) => {
        //this gets activated when the user clicks a square
        //it makes the cross appear and starts the computer's turn
        //if the result is draw and there are no more empty places left, and the user clicks on a square the game restarts
        if (props.draw) {
            restartGame();
        } else {
            //check if the game is over
            if (checkIfGameEnds(props.grid) == 0) {
                //check if it is the user's turn
                if (props.currentPlayer == false) {
                    alert("Sorry, this is not your turn. 😥");
                } else {
                    let stateCopy = { ...props.grid };
                    const keys = Object.keys(stateCopy);
                    const values = Object.values(stateCopy);
                    const searchedKey = keys.indexOf(divID);
                    const searchedValue = values[searchedKey];
                    const drawLine = (start, finish) => {
                        props.setLine([true, start, finish]);
                    };
                    //check if the user clicked on an empty square
                    if (searchedValue > 0) {
                        alert(
                            "Sorry, there is already something in this place. Please click again. 🤔"
                        );
                    } else {
                        //the user is the cross, which is the value 1
                        switch (keys[searchedKey]) {
                            case "A1":
                                stateCopy.A1 = 1;
                                break;
                            case "A2":
                                stateCopy.A2 = 1;
                                break;
                            case "A3":
                                stateCopy.A3 = 1;
                                break;
                            case "B1":
                                stateCopy.B1 = 1;
                                break;
                            case "B2":
                                stateCopy.B2 = 1;
                                break;
                            case "B3":
                                stateCopy.B3 = 1;
                                break;
                            case "C1":
                                stateCopy.C1 = 1;
                                break;
                            case "C2":
                                stateCopy.C2 = 1;
                                break;
                            case "C3":
                                stateCopy.C3 = 1;
                                break;
                            default:
                                console.log("I think there is a problem.");
                        }
                        //the user can click on a square and a cross will appear if its his turn
                        props.click(stateCopy);
                        //check if game ends
                        if (checkIfGameEnds(stateCopy) != 0) {
                            const whoWon = checkIfGameEnds(stateCopy)[0];
                            if (whoWon == 1) {
                                drawLine(
                                    checkIfGameEnds(stateCopy)[1],
                                    checkIfGameEnds(stateCopy)[2]
                                );
                                //update the score counter
                                const newScore = props.score[0] + 1;
                                let scoreCopy = props.score;
                                scoreCopy[0] = newScore;
                                props.setScore(scoreCopy);
                                //notify the user
                                showWinnerModal(true);
                            } else if (whoWon == 2) {
                                drawLine(
                                    checkIfGameEnds(stateCopy)[1],
                                    checkIfGameEnds(stateCopy)[2]
                                );
                                //update the score counter
                                const newScore = props.score[2] + 1;
                                let scoreCopy = props.score;
                                scoreCopy[2] = newScore;
                                props.setScore(scoreCopy);
                                //notify the user
                                showLoserModal(true);
                            }
                        } else {
                            //it's the computer's turn
                            props.setCurrentPlayer(false);
                            //the next turn is for the machine
                            logic(stateCopy);
                        }
                    }
                }
            } else {
                //if the game is over and the user clicks on a square the game restarts
                restartGame();
            }
        }
    };

    const logic = (state) => {
        //these are the calculations for the computer, it randomly puts a circle in an empty square
        //check if the game is over
        if (checkIfGameEnds(state) == 0) {
            let gridCopy = { ...state };
            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
            let nextTurn = getRandomInt(8);
            const keys = Object.keys(gridCopy);
            const values = Object.values(gridCopy);
            if (values[nextTurn] != 0) {
                //check if there are empty places left
                let numberOfEmptyPlaces = 0;
                for (var i = 0; i < values.length; i++) {
                    if (values[i] == 0) {
                        numberOfEmptyPlaces = numberOfEmptyPlaces + 1;
                    }
                }
                if (numberOfEmptyPlaces < 1) {
                    //update the score counter
                    const newScore = props.score[1] + 1;
                    let scoreCopy = props.score;
                    scoreCopy[1] = newScore;
                    props.setScore(scoreCopy);
                    //signal if the result is draw
                    props.setDraw(true);
                    //notify the user
                    console.log("draw");
                    console.log(loserModal);
                    console.log(drawModal);
                    showDrawModal(true);
                    console.log(loserModal);
                    console.log(drawModal);
                } else {
                    logic(gridCopy);
                }
            } else {
                //the machine is the circle, which is the value 2
                switch (keys[nextTurn]) {
                    case "A1":
                        gridCopy.A1 = 2;
                        break;
                    case "A2":
                        gridCopy.A2 = 2;
                        break;
                    case "A3":
                        gridCopy.A3 = 2;
                        break;
                    case "B1":
                        gridCopy.B1 = 2;
                        break;
                    case "B2":
                        gridCopy.B2 = 2;
                        break;
                    case "B3":
                        gridCopy.B3 = 2;
                        break;
                    case "C1":
                        gridCopy.C1 = 2;
                        break;
                    case "C2":
                        gridCopy.C2 = 2;
                        break;
                    case "C3":
                        gridCopy.C3 = 2;
                        break;
                    default:
                        console.log("I think there is a problem.");
                }
                props.click(gridCopy);
                //check if game ends
                if (checkIfGameEnds(gridCopy) != 0) {
                    const whoWon = checkIfGameEnds(gridCopy)[0];
                    if (whoWon == 1) {
                        props.setLine([
                            true,
                            checkIfGameEnds(gridCopy)[1],
                            checkIfGameEnds(gridCopy)[2],
                        ]);
                        //update the score counter
                        const newScore = props.score[2] + 1;
                        let scoreCopy = props.score;
                        scoreCopy[2] = newScore;
                        props.setScore(scoreCopy);
                        //notify the user
                        showWinnerModal(true);
                    } else if (whoWon == 2) {
                        props.setLine([
                            true,
                            checkIfGameEnds(gridCopy)[1],
                            checkIfGameEnds(gridCopy)[2],
                        ]);
                        //update the score counter
                        const newScore = props.score[2] + 1;
                        let scoreCopy = props.score;
                        scoreCopy[2] = newScore;
                        props.setScore(scoreCopy);
                        //notify the user
                        showLoserModal(true);
                    }
                } else {
                    //the next turn is for the player
                    props.setCurrentPlayer(true);
                }
            }
        }
    };

    return (
        <>
            <table className="table table-bordered grid-table">
                <tbody>
                    <tr>
                        <td onClick={() => squareClicked("A1")} className="A1">
                            <Cell ID="A1" state={props.grid} />
                            {squareVisible("A1")}
                        </td>
                        <td onClick={() => squareClicked("A2")} className="A2">
                            <Cell ID="A2" state={props.grid} />
                            {squareVisible("A2")}
                        </td>
                        <td onClick={() => squareClicked("A3")} className="A3">
                            <Cell ID="A3" state={props.grid} />
                            {squareVisible("A3")}
                        </td>
                    </tr>

                    <tr>
                        <td onClick={() => squareClicked("B1")} className="B1">
                            <Cell ID="B1" state={props.grid} />
                            {squareVisible("B1")}
                        </td>
                        <td onClick={() => squareClicked("B2")} className="B2">
                            <Cell ID="B2" state={props.grid} />
                            {squareVisible("B2")}
                        </td>
                        <td onClick={() => squareClicked("B3")} className="B3">
                            <Cell ID="B3" state={props.grid} />
                            {squareVisible("B3")}
                        </td>
                    </tr>
                    <tr>
                        <td onClick={() => squareClicked("C1")} className="C1">
                            <Cell ID="C1" state={props.grid} />
                            {squareVisible("C1")}
                        </td>
                        <td onClick={() => squareClicked("C2")} className="C2">
                            <Cell ID="C2" state={props.grid} />
                            {squareVisible("C2")}
                        </td>
                        <td onClick={() => squareClicked("C3")} className="C3">
                            <Cell ID="C3" state={props.grid} />
                            {squareVisible("C3")}
                        </td>
                    </tr>
                </tbody>
            </table>
            {lineVisible()}
            <div>
                <WinnerModal
                    show={winnerModal}
                    onHide={() => showWinnerModal(false)}
                    showWinnerModal={showWinnerModal}
                    restartGame={restartGame}
                />
                <LoserModal
                    show={loserModal}
                    onHide={() => showLoserModal(false)}
                    showLoserModal={showLoserModal}
                    restartGame={restartGame}
                />
                <DrawModal
                    show={drawModal}
                    onHide={() => showDrawModal(false)}
                    showDrawModal={showDrawModal}
                    restartGame={restartGame}
                />
            </div>
        </>
    );
};

export default Grid;
