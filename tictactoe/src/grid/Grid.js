import React, { Component } from 'react';
import Cell from './cell/Cell';
import './Grid.css';

function Grid(props) {
    function squareClicked(divID) {
        if (props.currentPlayer == false) {
            alert("Sorry, this is not your turn. 😥");
        } else {
            //the user is the cross, which is the value 1
            let stateCopy = props.grid;
            const keys = Object.keys(stateCopy);
            console.log(keys);
            const values = Object.values(stateCopy);
            const searchedKey = keys.indexOf(divID);
            console.log(searchedKey)
            const searchedValue = values[searchedKey];
            if (searchedValue > 0) {
                alert("Sorry, there is already something in this place. Please click again. 🤔");
            } else {
                //console.log(searchedKey);
                //console.log(stateCopy[searchedKey]);
                stateCopy.(keys.indexOf(divID)) = 1;
                //console.log(stateCopy[searchedKey]);
                props.click(stateCopy);
                console.log(stateCopy)
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