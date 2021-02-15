import React, { Component } from 'react';
import Cell from './cell/Cell';
import './Grid.css';

function Grid(props) {
    function squareClicked(divID) {
        //check if it is the user's turn
        if (props.currentPlayer == false) {
            alert("Sorry, this is not your turn. 😥");
        } else {
            let stateCopy = { ...props.grid };
            const keys = Object.keys(stateCopy);
            const values = Object.values(stateCopy);
            const searchedKey = keys.indexOf(divID);
            const searchedValue = values[searchedKey];
            //check if the user clicked on an empty square
            if (searchedValue > 0) {
                alert("Sorry, there is already something in this place. Please click again. 🤔");
            } else {
                //the user is the cross, which is the value 1
                switch (keys[searchedKey]) {
                    case "A1":
                        stateCopy.A1 = 1;
                      break;
                    case 'A2':
                        stateCopy.A2 = 1;
                      break;
                    case 'A3':
                        stateCopy.A3 = 1;
                      break;
                    case 'B1':
                        stateCopy.B1 = 1;
                      break;
                    case 'B2':
                        stateCopy.B2 = 1;
                      break;
                    case 'B3':
                        stateCopy.B3 = 1;
                      break;
                    case 'C1':
                        stateCopy.C1 = 1;
                      break;
                    case 'C2':
                        stateCopy.C2 = 1;
                      break;
                    case 'C3':
                        stateCopy.C3 = 1;
                      break;
                    default:
                        console.log("I think there is a problem.");
                  }
                //the user can click on a square and a cross will appear if its his turn
                console.log(props.grid);
                props.click(stateCopy);
                console.log(props.grid);
            }
        }
    }
    function squareVisible (cellID) {
        const keys = Object.keys(props.grid);
        const values = Object.values(props.grid);
        const searchedKey = keys.indexOf(cellID);
        const searchedValue = values[searchedKey];

        if (searchedValue == 0){
            return <div></div>;
        } else if (searchedValue == 1 || searchedValue == 2) {
            return <></>;
        }
    }
    return (
        <>
            <table className="table table-bordered grid-table">
            <thead>
                <tr>
                    <td onClick={() => squareClicked("A1")}><Cell ID="A1" state={props.grid}/>{squareVisible("A1")}</td>
                    <td onClick={() => squareClicked("A2")}><Cell ID="A2" state={props.grid}/>{squareVisible("A2")}</td>
                    <td onClick={() => squareClicked("A3")}><Cell ID="A3" state={props.grid}/>{squareVisible("A3")}</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td onClick={() => squareClicked("B1")}><Cell ID="B1" state={props.grid}/>{squareVisible("B1")}</td>
                    <td onClick={() => squareClicked("B2")}><Cell ID="B2" state={props.grid}/>{squareVisible("B2")}</td>
                    <td onClick={() => squareClicked("B3")}><Cell ID="B3" state={props.grid}/>{squareVisible("B3")}</td>
                </tr>
                <tr>
                    <td onClick={() => squareClicked("C1")}><Cell ID="C1" state={props.grid}/>{squareVisible("C1")}</td>
                    <td onClick={() => squareClicked("C2")}><Cell ID="C2" state={props.grid}/>{squareVisible("C2")}</td>
                    <td onClick={() => squareClicked("C3")}><Cell ID="C3" state={props.grid}/>{squareVisible("C3")}</td>
                </tr>
            </tbody>

                
            </table>
        </>
    );
  }

export default Grid;