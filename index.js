// code your solution here
function superbowlWin(arrayOfObjects) {
    const win = arrayOfObjects.find(obj => obj.result === "W" );
    // wining record
    return win ? win.year : undefined;
}
