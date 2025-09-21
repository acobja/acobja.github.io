let xTurn = true;
function changeMark(buttonId) {
    
    let currentMark = document.getElementById(buttonId).innerHTML;
    let xMark = '<span class="x">x</span>';
    let OMark = '<span class="O">O</span>';
    
    if (!currentMark) {
        if (xTurn) {
            document.getElementById(buttonId).innerHTML = xMark;
        }
        else {
            document.getElementById(buttonId).innerHTML = OMark;
        }
    xTurn = !xTurn;
    checkWin();
    }

}

function checkWin() {
    let a1 = document.getElementById("a1").textContent;
    let b1 = document.getElementById("b1").textContent;
    let c1 = document.getElementById("c1").textContent;

    let a2 = document.getElementById("a2").textContent;
    let b2 = document.getElementById("b2").textContent;
    let c2 = document.getElementById("c2").textContent;

    let a3 = document.getElementById("a3").textContent;
    let b3 = document.getElementById("b3").textContent;
    let c3 = document.getElementById("c3").textContent;
    //row 1
    if (a1 == b1 && b1 == c1 && a1 == "x") {
        document.getElementById("winner").innerHTML = "X wins!";
    }
    else if (a1 == b1 && b1 == c1 && a1 == "O") {
        document.getElementById("winner").innerHTML = "O wins!";
    }
    //row 2
    else if (a2 == b2 && b2 == c2 && a2 == "x") {
        document.getElementById("winner").innerHTML = "X wins!";
    }
    else if (a2 == b2 && b2 == c2 && a2 == "O") {
        document.getElementById("winner").innerHTML = "O wins!";
    }
    //row 3
    else if (a3 == b3 && b3 == c3 && a3 == "x") {
        document.getElementById("winner").innerHTML = "X wins!";
    }
    else if (a3 == b3 && b3 == c3 && a3 == "O") {
        document.getElementById("winner").innerHTML = "O wins!";
    }
    //diagonal a1 to c3
    else if (a1 == b2 && b2 == c3 && a1 == "x") {
        document.getElementById("winner").innerHTML = "X wins!";
    }
    else if (a1 == b2 && b2 == c3 && a1 == "O") {
        document.getElementById("winner").innerHTML = "O wins!";
    }
    //diagonal c1 to a3
    else if (c1 == b2 && b2 == a3 && c1 == "x") {
        document.getElementById("winner").innerHTML = "X wins!";
    }
    else if (c1 == b2 && b2 == a3 && c1 == "O") {
        document.getElementById("winner").innerHTML = "O wins!";
    }
    //column 1
    else if (a1 == a2 && a2 == a3 && a1 == "x") {
        document.getElementById("winner").innerHTML = "X wins!";
    }
    else if (a1 == a2 && a2 == a3 && a1 == "O") {
        document.getElementById("winner").innerHTML = "O wins!";
    }
    //rcolumn 2
    else if (b1 == b2 && b2 == b3 && b1 == "x") {
        document.getElementById("winner").innerHTML = "X wins!";
    }
    else if (b1 == b2 && b2 == b3 && b1 == "O") {
        document.getElementById("winner").innerHTML = "O wins!";
    }
    //column 3
    else if (c1 == c2 && c2 == c3 && c1 == "x") {
        document.getElementById("winner").innerHTML = "X wins!";
    }
    else if (c1 == c2 && c2 == c3 && c1 == "O") {
        document.getElementById("winner").innerHTML = "O wins!";
    }
    else {
        document.getElementById("winner").innerHTML = "Scratch, it's a tie!";
    }
}

function resetGame() {
    document.getElementById("a1").innerHTML = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("c1").innerHTML = "";

    document.getElementById("a2").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("c2").innerHTML = "";

    document.getElementById("a3").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("c3").innerHTML = "";

    document.getElementById("winner").innerHTML = "";
    xTurn = true;
}


