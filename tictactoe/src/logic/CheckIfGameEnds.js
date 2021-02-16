import React from "react";

const CheckIfGameEnds = (grid) => {
    const values = Object.values(grid);
    //check horizontal lines
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
    if (values[0] > 0 && values[1] > 0 && values[2] > 0) {
        const sum = values[0] + values[1] + values[2];
        const toReturn = compareSums(sum);
        if (toReturn > 0) {
            return toReturn;
        }
    }
    if (values[3] > 0 && values[4] > 0 && values[5] > 0) {
        const sum = values[3] + values[4] + values[5];
        const toReturn = compareSums(sum);
        if (toReturn > 0) {
            return toReturn;
        }
    }
    if (values[6] > 0 && values[7] > 0 && values[8] > 0) {
        const sum = values[6] + values[7] + values[8];
        const toReturn = compareSums(sum);
        if (toReturn > 0) {
            return toReturn;
        }
    }
    //check vertical lines
    if (values[0] > 0 && values[3] > 0 && values[6] > 0) {
        const sum = values[0] + values[3] + values[6];
        const toReturn = compareSums(sum);
        if (toReturn > 0) {
            return toReturn;
        }
    }
    if (values[1] > 0 && values[4] > 0 && values[7] > 0) {
        const sum = values[1] + values[4] + values[7];
        const toReturn = compareSums(sum);
        if (toReturn > 0) {
            return toReturn;
        }
    }
    if (values[2] > 0 && values[5] > 0 && values[8] > 0) {
        const sum = values[2] + values[5] + values[8];
        const toReturn = compareSums(sum);
        if (toReturn > 0) {
            return toReturn;
        }
    }
    //check the 2 diagonal
    if (values[0] > 0 && values[4] > 0 && values[8] > 0) {
        const sum = values[0] + values[4] + values[8];
        const toReturn = compareSums(sum);
        if (toReturn > 0) {
            return toReturn;
        }
    }
    if (values[2] > 0 && values[4] > 0 && values[6] > 0) {
        const sum = values[2] + values[4] + values[6];
        const toReturn = compareSums(sum);
        if (toReturn > 0) {
            return toReturn;
        }
    }
    //0 means nobody won
    return 0;
};

export default CheckIfGameEnds;
