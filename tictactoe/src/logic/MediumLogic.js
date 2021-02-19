import React from "react";

const MediumLogic = (state) => {
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    };
    const values = Object.values(state);
    let twoCircle = [];
    let twoCross = [];
    
    const loopThrough = (one, two, three) => {
        const valArray = [values[one], values[two], values[three]];
        //check if there are two circles in a row
        if (
            valArray[0] + valArray[1] == 4 ||
            valArray[0] + valArray[2] == 4 ||
            valArray[1] + valArray[2] == 4
        ) {
            if (valArray[0] == 0) {
                twoCircle.push(one);
            } else if (valArray[1] == 0) {
                twoCircle.push(two);
            } else if (valArray[2] == 0) {
                twoCircle.push(three);
            }
        } else if (valArray[0] + valArray[1] + valArray[2] == 2) {
            //check if there are two crosses in a row
            if (valArray[0] == 1 && valArray[1] == 1) {
                twoCross.push(three);
            } else if (valArray[0] == 1 && valArray[2] == 1) {
                twoCross.push(two);
            } else if (valArray[1] == 1 && valArray[2] == 1) {
                twoCross.push(one);
            }
        }
    };
    //horizontal lines
    loopThrough(0, 1, 2);
    loopThrough(3, 4, 5);
    loopThrough(6, 7, 8);
    //vertical lines
    loopThrough(0, 3, 6);
    loopThrough(1, 4, 7);
    loopThrough(2, 5, 8);
    //diagonal lines
    loopThrough(0, 4, 8);
    loopThrough(2, 4, 6);

    //if there are two circles in a row, the computer puts the third in the place
    //if there are two such rows, the computer randomly decides where to put it
    if (twoCircle.length > 0) {
        return twoCircle[getRandomInt(twoCircle.length)];
    } else if (twoCross.length > 0) {
        //if there are two crosses in a row, the computer puts the third in the place, only if there isn't any 2 circle rows
        //if there are two such rows, the computer randomly decides where to put it
        return twoCross[getRandomInt(twoCross.length)];
    } else {
        //if neither of the above happens, the computer randomly puts somewhere
        return getRandomInt(8);
    }
};

export default MediumLogic;
