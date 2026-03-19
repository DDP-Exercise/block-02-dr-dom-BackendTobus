"use strict";
/*******************************************************
 *     tictactoe.js - 50p.
 *
 *     When you fought Dr. DOM today, to me it looked like two super heroes playing
 *     TIC TAC TOE! At times, it was hard to tell, who would have won which fight...
 *
 *     To solve my misfortune, please write a little program, that takes a (hard-coded)
 *     two-dimensional Array (BATTLEFIELD) and checks if one of the two opponents has
 *     won the battle, and if so, how (vertical, horizontal, main-diagonal, anti-diagonal).
 *
 *     Since you have already had a couple of encounters of different severities, I simply
 *     can't translate all your battles to TIC TAC TOE matches of the same size.
 *     For that reason, your little program should be written in a way, that it can
 *     scale with the size of the battlefield (3x3, 4x4, ..., nxn).
 *
 *     Bratlsoft - 2026-03-15
 *******************************************************/

const X = "Savior (X)";
const O = "Dr. DOM (O)";

//Some of your epic battles:
const BATTLEFIELD =
   [
       [O, X, O],
       [X, O, O],
       [O, X, X],
   ];
// const BATTLEFIELD =
//     [
//         [null, X, X],
//         [X, O, null],
//         [O, O, O],
//     ];
// const BATTLEFIELD =
//     [
//         [O, O, X],
//         [X, O, X],
//         [O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X],
//         [X, O, X],
//         [O, X, O],
//     ];

// const BATTLEFIELD =
//     [
//         [O, X, X, X],
//         [X, O, X, O],
//         [O, X, O, X],
//         [X, O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X, X, null],
//         [X, O, X, O, O],
//         [O, X, O, null,  X],
//         [X, null, X, O, O],
//         [X, null, O, X, O],
//     ];

//TODO: Check if the battle is over, and if so, announce the winner!

// Check Horizontal
// Check Vertical
// Check Main Diagonal
// Check Anti Diagonal

//Horizontal
let counthori = 0;
let countverti = 0;
let countdiago = 0;
let countantidiago = 0;
let battleover = false;

for(let i = 0; i < BATTLEFIELD.length; i++) {

    for(let j = 0; j < BATTLEFIELD[i].length; j++) {
        if(BATTLEFIELD[i][j] === X) {
            counthori++;
        }
        else if(BATTLEFIELD[i][j] === O) {
            counthori--;
        }
        else{
            counthori = 0;
        }

        if(BATTLEFIELD[j][i] == X)
        {
            countverti++;
        }
        else if(BATTLEFIELD[j][i] == O)
        {
            countverti--;
        }
        else{
            countverti = 0;
        }



    }
    if(BATTLEFIELD[i][i] == X)
    {
        countdiago++;
    }
    else if(BATTLEFIELD[i][i] == O)
    {
        countdiago--;
    }
    else{
        countdiago = 0;
    }
    if(BATTLEFIELD[i][BATTLEFIELD.length-1-i] == X)
    {
        countantidiago++;
    }
    else if(BATTLEFIELD[i][BATTLEFIELD.length-1-i] == O)
    {
        countantidiago--;
    }
    else{
        countantidiago = 0;
    }

    if(counthori== BATTLEFIELD.length) {
        console.log(X + " won Horizontal!");
        battleover = true;
    }
    else if(countverti == BATTLEFIELD.length)
    {
        console.log(X + " won Vertical!");
        battleover = true;
    }
    else if(countdiago == BATTLEFIELD.length)
    {
        console.log(X + " won Diagonal!");
        battleover = true;
    }
    else if (countantidiago == BATTLEFIELD.length)
    {
        console.log(X + " won Anti Diagonal!");
        battleover = true;
    }
    else if(counthori == BATTLEFIELD.length *-1){
        console.log(O + " won Horizontal!");
        battleover = true;
    }
    else if(countverti == BATTLEFIELD.length*-1)
    {
        console.log(O + " won Vertical!");
        battleover = true;
    }
    else if(countdiago == BATTLEFIELD.length*-1)
    {
        console.log(O + " won Diagonal!");
        battleover = true;
    }
    else if(countantidiago == BATTLEFIELD.length*-1)
    {
        console.log(O + " won Anti Diagonal!");
        battleover = true;
    }
    counthori= 0;
    countverti = 0;


}
if(!battleover)
{
    console.log("Kein Spieler hat gewonnen!");
}







