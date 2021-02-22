import React from "react";

const ImpossibleLogic = (state, numberOfGames) => {
    //this is the exact same logic as in the MediumLogic in the first, if the player or the computer has 2 in a row there isn't much we can do
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
        //create a variable with who starts
        //if weStart true then the comouter starts
        const weStart = numberOfGames % 2 != 1;
        //check if we start
        let numberOfOccupiedPlaces = 0;
        for (var i = 0; i < values.length; i++) {
            if (values[i] != 0) {
                numberOfOccupiedPlaces = numberOfOccupiedPlaces + 1;
            }
        }
        if (numberOfOccupiedPlaces == 0) {
            //if we start, randomly put in one of the corners
            switch (getRandomInt(4)) {
                case 0:
                    return 0;
                case 1:
                    return 2;
                case 2:
                    return 6;
                case 3:
                    return 8;
            }
        } else if (numberOfOccupiedPlaces == 1) {
            if (values[4] == 1) {
                //if they went to the middle, we go to a random corner
                switch (getRandomInt(4)) {
                    case 0:
                        return 0;
                    case 1:
                        return 2;
                    case 2:
                        return 6;
                    case 3:
                        return 8;
                }
            } else {
                //if the user starts we go into the middle, if they didn't go to the middle
                return 4;
            }
        } else if (numberOfOccupiedPlaces == 2) {
            //this is the second turn, if we start
            if (
                values[1] == 1 ||
                values[5] == 1 ||
                values[7] == 1 ||
                values[3] == 1
            ) {
                //if the opponent picked a side we put in the middle
                return 4;
            }
            if (
                values[0] == 1 ||
                values[2] == 1 ||
                values[6] == 1 ||
                values[8] == 1
            ) {
                //randomly put into one of the corners
                switch (getRandomInt(4)) {
                    case 0:
                        return 0;
                    case 1:
                        return 2;
                    case 2:
                        return 6;
                    case 3:
                        return 8;
                }
            }

            //if the opponent picked the middle, we go to the opposite corner
            if (values[4] == 1) {
                if (values[0] == 2) {
                    return 8;
                } else if (values[2] == 2) {
                    return 6;
                } else if (values[8] == 2) {
                    return 0;
                } else if (values[6] == 2) {
                    return 2;
                }
            }
        }
        if (numberOfOccupiedPlaces == 4) {
            //what happens in the third turn if we start

            if (values[4] == 2) {
                //what happens if the user in his first turn picked a side
                //we put it in a corner of a row, that doesn't have any crosses

                if (values[0] + values[1] + values[2] == 2) {
                    if (values[0] == 2) {
                        return 2;
                    } else {
                        return 0;
                    }
                } else if (values[2] + values[5] + values[8] == 2) {
                    if (values[2] == 2) {
                        return 8;
                    } else {
                        return 2;
                    }
                } else if (values[6] + values[7] + values[7] == 2) {
                    if (values[6] == 2) {
                        return 7;
                    } else {
                        return 6;
                    }
                } else if (values[0] + values[3] + values[6] == 2) {
                    if (values[0] == 2) {
                        return 6;
                    } else {
                        return 0;
                    }
                }
            }

            if (
                values[0] + values[1] + values[2] == 5 ||
                values[2] + values[5] + values[8] == 5 ||
                values[6] + values[7] + values[8] == 5 ||
                values[0] + values[3] + values[6] == 5
            ) {
                //randomly put into one of the corners if the user put into the corner in the beginning
                switch (getRandomInt(4)) {
                    case 0:
                        return 0;
                    case 1:
                        return 2;
                    case 2:
                        return 6;
                    case 3:
                        return 8;
                }
            }

            //if the opponent picked the middle in the beginning
            if (values[4] == 1) {
                //if the person picked a corner, we go to the last corner
                if (
                    values[0] == 1 ||
                    values[2] == 1 ||
                    values[6] == 1 ||
                    values[8] == 1
                ) {
                    switch (getRandomInt(4)) {
                        case 0:
                            return 0;
                        case 1:
                            return 2;
                        case 2:
                            return 6;
                        case 3:
                            return 8;
                    }
                }
                //if the person picks a side, the result will probably be tie, if we just put randomly
            }
        }
        return getRandomInt(8);
    }
};

export default ImpossibleLogic;
