import React from "react";
import checkIfGameEnds from "./CheckIfGameEnds";

export default function Logic(currentGrid, setGrid, setTurn) {
    //check if the game is over
    if (checkIfGameEnds(currentGrid) == 0) {
        let gridCopy = { ...currentGrid };
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
                setTimeout(() => {
                    alert("Game over! The result is draw. 🎉");
                }, 1);
            } else {
                Logic(currentGrid, setGrid, setTurn);
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
            setGrid(gridCopy);
            //check if game ends
            const whoWon = checkIfGameEnds(gridCopy);
            const one = 1;
            console.log(whoWon);
            if (whoWon == one) {
                setTimeout(() => {
                    alert("You won!");
                }, 1);
            } else if (whoWon == 2) {
                setTimeout(() => {
                    alert("You lost!");
                }, 1);
            } else if (whoWon == 0) {
                //the next turn is for the player
                setTurn(true);
            }
        }
    }
}
