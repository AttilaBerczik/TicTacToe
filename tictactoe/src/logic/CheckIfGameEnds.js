import React from "react";

const CheckIfGameEnds = (grid) => {
    const values = Object.values(grid);
    const compareSums = (sum) => {
        if (sum == 3) {
            //the player won if return 1
            return 1;
        } else if (sum == 6) {
            //the computer won if return 2
            return 2;
        } else {
            return 0;
        }
    };
    //check horizontal lines
    if (values[0] > 0 && values[1] > 0 && values[2] > 0) {
        const sum = values[0] + values[1] + values[2];
        const toReturn = compareSums(sum);
        if (toReturn > 0) {
            return [toReturn, "A1", "A3"];
        }
    }
    if (values[3] > 0 && values[4] > 0 && values[5] > 0) {
        const sum = values[3] + values[4] + values[5];
        const toReturn = compareSums(sum);
        if (toReturn > 0) {
            return [toReturn, "B1", "B3"];
        }
    }
    if (values[6] > 0 && values[7] > 0 && values[8] > 0) {
        const sum = values[6] + values[7] + values[8];
        const toReturn = compareSums(sum);
        if (toReturn > 0) {
            return [toReturn, "C1", "C3"];
        }
    }
    //check vertical lines
    if (values[0] > 0 && values[3] > 0 && values[6] > 0) {
        const sum = values[0] + values[3] + values[6];
        const toReturn = compareSums(sum);
        if (toReturn > 0) {
            return [toReturn, "A1", "C1"];
        }
    }
    if (values[1] > 0 && values[4] > 0 && values[7] > 0) {
        const sum = values[1] + values[4] + values[7];
        const toReturn = compareSums(sum);
        if (toReturn > 0) {
            return [toReturn, "A2", "C2"];
        }
    }
    if (values[2] > 0 && values[5] > 0 && values[8] > 0) {
        const sum = values[2] + values[5] + values[8];
        const toReturn = compareSums(sum);
        if (toReturn > 0) {
            return [toReturn, "A3", "C3"];
        }
    }
    //check the 2 diagonal
    if (values[0] > 0 && values[4] > 0 && values[8] > 0) {
        const sum = values[0] + values[4] + values[8];
        const toReturn = compareSums(sum);
        if (toReturn > 0) {
            return [toReturn, "A1", "C3"];
        }
    }
    if (values[2] > 0 && values[4] > 0 && values[6] > 0) {
        const sum = values[2] + values[4] + values[6];
        const toReturn = compareSums(sum);
        if (toReturn > 0) {
            return [toReturn, "C1", "A3"];
        }
    }
    //0 means nobody won
    return 0;
};

export default CheckIfGameEnds;
