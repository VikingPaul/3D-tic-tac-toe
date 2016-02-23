var top = document.getElementById("top")
var middle = document.getElementById("middle")
var bottom = document.getElementById("bottom")
var newGame = document.getElementById("button")
var turn = true
var xScore = 0
var oScore = 0
top.addEventListener("click", topPlacement)
middle.addEventListener("click", middlePlacement)
bottom.addEventListener("click", bottomPlacement)
newGame.addEventListener("click", reset)
var topArray = [
  [],
  [],
  [],
]
var middleArray = [
  [],
  [],
  [],
]
var bottomArray = [
  [],
  [],
  [],
]
function reset() {
  for (var i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      topArray[i][j] = "&nbsp;"
      middleArray[i][j] = "&nbsp;"
      bottomArray[i][j] = "&nbsp;"
    }
  }
  button.style.visibility = "hidden"
  placeStuff()
}
function placeStuff() {
  if (turn) {
    document.getElementById("p1").style.border = "5px solid red"
    document.getElementById("p2").style.border = "none"
    document.getElementById("p1").style.background = "#285C15"
    document.getElementById("p2").style.background = "none"
    document.getElementById("p1").style.boxShadow = "2px 2px 5px darkgray"
    document.getElementById("p2").style.boxShadow = "none"
  } else {
    document.getElementById("p2").style.background = "#285C15"
    document.getElementById("p1").style.background = "none"
    document.getElementById("p2").style.border = "5px solid blue"
    document.getElementById("p1").style.border = "none"
    document.getElementById("p2").style.boxShadow = "2px 2px 5px darkgray"
    document.getElementById("p1").style.boxShadow = "none"
  }
  for (var i = 1; i < 4; i++) {
    for (j = 1; j < 4; j++) {
      document.getElementById('top' + i + j).innerHTML = topArray[i-1][j-1]
      if (topArray[i-1][j-1] === "X") {
        document.getElementById('top' + i + j).style.color = "red"
      } else if (topArray[i-1][j-1] === "O") {
        document.getElementById('top' + i + j).style.color = "blue"
      }
      document.getElementById('middle' + i + j).innerHTML = middleArray[i-1][j-1]
      if (middleArray[i-1][j-1] === "X") {
        document.getElementById('middle' + i + j).style.color = "red"
      } else if (middleArray[i-1][j-1] === "O") {
        document.getElementById('middle' + i + j).style.color = "blue"
      }
      document.getElementById('bottom' + i + j).innerHTML = bottomArray[i-1][j-1]
      if (bottomArray[i-1][j-1] === "X") {
        document.getElementById('bottom' + i + j).style.color = "red"
      } else if (bottomArray[i-1][j-1] === "O") {
        document.getElementById('bottom' + i + j).style.color = "blue"
      }
    }
  }
  document.getElementById("p1").innerHTML = "P1:" + xScore
  document.getElementById("p2").innerHTML = "P2:" + oScore
  var counter = 0
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (topArray[i][j] !== "&nbsp;") {
        counter++
      }
      if (middleArray[i][j] !== "&nbsp;") {
        counter++
      }
      if (bottomArray[i][j] !== "&nbsp;") {
        counter++
      }
    };
  };
  if (counter === 27) {
    button.style.visibility = "visible"
    if (xScore > oScore) {
      alert("X WINS!")
    } else if (xScore < oScore) {
      alert("O WINS!")
    } else {
      alert("TIE GAME!")
    }
  }
}
reset()
function topPlacement(e) {
  var id = e.target.id.substring(3,5)
  if (!isNaN(id)) {
    var first = id.substring(0,1)-1
    var second = id.substring(1,2)-1
    if (topArray[first][second] === "&nbsp;") {
      if (turn === true) {
        topArray[first][second] = "X"
        turn = false
      } else {
        topArray[first][second] = "O"
        turn = true
      }
    }
  }
  scoring()
  placeStuff()
  xScore = 0
  oScore = 0
}
function middlePlacement(e) {
  var id = e.target.id.substring(6,8)
  if (!isNaN(id)) {
    var first = id.substring(0,1)-1
    var second = id.substring(1,2)-1
    if (middleArray[first][second] === "&nbsp;") {
      if (turn === true) {
        middleArray[first][second] = "X"
        turn = false
      } else {
        middleArray[first][second] = "O"
        turn = true
      }
    }
  }
  scoring()
  placeStuff()
  xScore = 0
  oScore = 0
}
function bottomPlacement(e) {
  var id = e.target.id.substring(6,8)
  if (!isNaN(id)) {
    var first = id.substring(0,1)-1
    var second = id.substring(1,2)-1
    if (bottomArray[first][second] === "&nbsp;") {
      if (turn === true) {
        bottomArray[first][second] = "X"
        turn = false
      } else {
        bottomArray[first][second] = "O"
        turn = true
      }
    }
  }
  scoring()
  placeStuff()
  xScore = 0
  oScore = 0
}

function scoring() {
  ////////////////////////////// X
  //////////////////////////////top
  if (topArray[0][0] === "X" && topArray[0][1] === "X" && topArray[0][2] === "X") {
    xScore++
  }
  if (topArray[1][0] === "X" && topArray[1][1] === "X" && topArray[1][2] === "X") {
    xScore++
  }
  if (topArray[2][0] === "X" && topArray[2][1] === "X" && topArray[2][2] === "X") {
    xScore++
  }
  if (topArray[0][0] === "X" && topArray[1][0] === "X" && topArray[2][0] === "X") {
    xScore++
  }
  if (topArray[0][1] === "X" && topArray[1][1] === "X" && topArray[2][1] === "X") {
    xScore++
  }
  if (topArray[0][2] === "X" && topArray[1][2] === "X" && topArray[2][2] === "X") {
    xScore++
  }
  if (topArray[0][0] === "X" && topArray[1][1] === "X" && topArray[2][2] === "X") {
    xScore++
  }
  if (topArray[0][2] === "X" && topArray[1][1] === "X" && topArray[2][0] === "X") {
    xScore++
  }
  ////////////////////////////middle
if (middleArray[0][0] === "X" && middleArray[0][1] === "X" && middleArray[0][2] === "X") {
    xScore++
  }
  if (middleArray[1][0] === "X" && middleArray[1][1] === "X" && middleArray[1][2] === "X") {
    xScore++
  }
  if (middleArray[2][0] === "X" && middleArray[2][1] === "X" && middleArray[2][2] === "X") {
    xScore++
  }
  if (middleArray[0][0] === "X" && middleArray[1][0] === "X" && middleArray[2][0] === "X") {
    xScore++
  }
  if (middleArray[0][1] === "X" && middleArray[1][1] === "X" && middleArray[2][1] === "X") {
    xScore++
  }
  if (middleArray[0][2] === "X" && middleArray[1][2] === "X" && middleArray[2][2] === "X") {
    xScore++
  }
  if (middleArray[0][0] === "X" && middleArray[1][1] === "X" && middleArray[2][2] === "X") {
    xScore++
  }
  if (middleArray[0][2] === "X" && middleArray[1][1] === "X" && middleArray[2][0] === "X") {
    xScore++
  }
  ////////////////////////////bottom
  if (bottomArray[0][0] === "X" && bottomArray[0][1] === "X" && bottomArray[0][2] === "X") {
    xScore++
  }
  if (bottomArray[1][0] === "X" && bottomArray[1][1] === "X" && bottomArray[1][2] === "X") {
    xScore++
  }
  if (bottomArray[2][0] === "X" && bottomArray[2][1] === "X" && bottomArray[2][2] === "X") {
    xScore++
  }
  if (bottomArray[0][0] === "X" && bottomArray[1][0] === "X" && bottomArray[2][0] === "X") {
    xScore++
  }
  if (bottomArray[0][1] === "X" && bottomArray[1][1] === "X" && bottomArray[2][1] === "X") {
    xScore++
  }
  if (bottomArray[0][2] === "X" && bottomArray[1][2] === "X" && bottomArray[2][2] === "X") {
    xScore++
  }
  if (bottomArray[0][0] === "X" && bottomArray[1][1] === "X" && bottomArray[2][2] === "X") {
    xScore++
  }
  if (bottomArray[0][2] === "X" && bottomArray[1][1] === "X" && bottomArray[2][0] === "X") {
    xScore++
  }
  /////////////////////////////0,0
  if (topArray[0][0] === "X" && middleArray[0][1] === "X" && bottomArray[0][2] === "X") {
    xScore++
  }
  if (topArray[0][0] === "X" && middleArray[1][0] === "X" && bottomArray[2][0] === "X") {
    xScore++
  }
  if (topArray[0][0] === "X" && middleArray[1][1] === "X" && bottomArray[2][2] === "X") {
    xScore++
  }
  if (topArray[0][0] === "X" && middleArray[0][0] === "X" && bottomArray[0][0] === "X") {
    xScore++
  }
  //////////////////////////////0,2
  if (topArray[0][2] === "X" && middleArray[0][2] === "X" && bottomArray[0][2] === "X") {
    xScore++
  }
  if (topArray[0][2] === "X" && middleArray[0][1] === "X" && bottomArray[0][0] === "X") {
    xScore++
  }
  if (topArray[0][2] === "X" && middleArray[1][1] === "X" && bottomArray[2][0] === "X") {
    xScore++
  }
  if (topArray[0][2] === "X" && middleArray[1][2] === "X" && bottomArray[2][2] === "X") {
    xScore++
  }
  //////////////////////////////2,0
  if (topArray[2][0] === "X" && middleArray[2][0] === "X" && bottomArray[2][0] === "X") {
    xScore++
  }
  if (topArray[2][0] === "X" && middleArray[1][0] === "X" && bottomArray[0][0] === "X") {
    xScore++
  }
  if (topArray[2][0] === "X" && middleArray[1][1] === "X" && bottomArray[0][2] === "X") {
    xScore++
  }
  if (topArray[2][0] === "X" && middleArray[2][1] === "X" && bottomArray[2][2] === "X") {
    xScore++
  }
  //////////////////////////////2,2
  if (topArray[2][2] === "X" && middleArray[2][2] === "X" && bottomArray[2][2] === "X") {
    xScore++
  }
  if (topArray[2][2] === "X" && middleArray[1][2] === "X" && bottomArray[0][2] === "X") {
    xScore++
  }
  if (topArray[2][2] === "X" && middleArray[2][1] === "X" && bottomArray[2][0] === "X") {
    xScore++
  }
  if (topArray[2][2] === "X" && middleArray[1][1] === "X" && bottomArray[0][0] === "X") {
    xScore++
  }
  //////////////////////////////0,1
  if (topArray[0][1] === "X" && middleArray[0][1] === "X" && bottomArray[0][1] === "X") {
    xScore++
  }
  if (topArray[0][1] === "X" && middleArray[1][1] === "X" && bottomArray[2][1] === "X") {
    xScore++
  }
  //////////////////////////////1,0
  if (topArray[1][0] === "X" && middleArray[1][0] === "X" && bottomArray[1][0] === "X") {
    xScore++
  }
  if (topArray[1][0] === "X" && middleArray[1][1] === "X" && bottomArray[1][2] === "X") {
    xScore++
  }
  //////////////////////////////1,2
  if (topArray[1][2] === "X" && middleArray[1][2] === "X" && bottomArray[1][2] === "X") {
    xScore++
  }
  if (topArray[1][2] === "X" && middleArray[1][1] === "X" && bottomArray[1][0] === "X") {
    xScore++
  }
  //////////////////////////////2,1
  if (topArray[2][1] === "X" && middleArray[2][1] === "X" && bottomArray[2][1] === "X") {
    xScore++
  }
  if (topArray[2][1] === "X" && middleArray[1][1] === "X" && bottomArray[0][1] === "X") {
    xScore++
  }
  //////////////////////////////1,1
  if (topArray[1][1] === "X" && middleArray[1][1] === "X" && bottomArray[1][1] === "X") {
    xScore++
  }
  ////////////////////////////// O
  //////////////////////////////top
  if (topArray[0][0] === "O" && topArray[0][1] === "O" && topArray[0][2] === "O") {
    oScore++
  }
  if (topArray[1][0] === "O" && topArray[1][1] === "O" && topArray[1][2] === "O") {
    oScore++
  }
  if (topArray[2][0] === "O" && topArray[2][1] === "O" && topArray[2][2] === "O") {
    oScore++
  }
  if (topArray[0][0] === "O" && topArray[1][0] === "O" && topArray[2][0] === "O") {
    oScore++
  }
  if (topArray[0][1] === "O" && topArray[1][1] === "O" && topArray[2][1] === "O") {
    oScore++
  }
  if (topArray[0][2] === "O" && topArray[1][2] === "O" && topArray[2][2] === "O") {
    oScore++
  }
  if (topArray[0][0] === "O" && topArray[1][1] === "O" && topArray[2][2] === "O") {
    oScore++
  }
  if (topArray[0][2] === "O" && topArray[1][1] === "O" && topArray[2][0] === "O") {
    oScore++
  }
  ////////////////////////////middle
  if (middleArray[0][0] === "O" && middleArray[0][1] === "O" && middleArray[0][2] === "O") {
    oScore++
  }
  if (middleArray[1][0] === "O" && middleArray[1][1] === "O" && middleArray[1][2] === "O") {
    oScore++
  }
  if (middleArray[2][0] === "O" && middleArray[2][1] === "O" && middleArray[2][2] === "O") {
    oScore++
  }
  if (middleArray[0][0] === "O" && middleArray[1][0] === "O" && middleArray[2][0] === "O") {
    oScore++
  }
  if (middleArray[0][1] === "O" && middleArray[1][1] === "O" && middleArray[2][1] === "O") {
    oScore++
  }
  if (middleArray[0][2] === "O" && middleArray[1][2] === "O" && middleArray[2][2] === "O") {
    oScore++
  }
  if (middleArray[0][0] === "O" && middleArray[1][1] === "O" && middleArray[2][2] === "O") {
    oScore++
  }
  if (middleArray[0][2] === "O" && middleArray[1][1] === "O" && middleArray[2][0] === "O") {
    oScore++
  }
  ////////////////////////////bottom
if (bottomArray[0][0] === "O" && bottomArray[0][1] === "O" && bottomArray[0][2] === "O") {
    oScore++
  }
  if (bottomArray[1][0] === "O" && bottomArray[1][1] === "O" && bottomArray[1][2] === "O") {
    oScore++
  }
  if (bottomArray[2][0] === "O" && bottomArray[2][1] === "O" && bottomArray[2][2] === "O") {
    oScore++
  }
  if (bottomArray[0][0] === "O" && bottomArray[1][0] === "O" && bottomArray[2][0] === "O") {
    oScore++
  }
  if (bottomArray[0][1] === "O" && bottomArray[1][1] === "O" && bottomArray[2][1] === "O") {
    oScore++
  }
  if (bottomArray[0][2] === "O" && bottomArray[1][2] === "O" && bottomArray[2][2] === "O") {
    oScore++
  }
  if (bottomArray[0][0] === "O" && bottomArray[1][1] === "O" && bottomArray[2][2] === "O") {
    oScore++
  }
  if (bottomArray[0][2] === "O" && bottomArray[1][1] === "O" && bottomArray[2][0] === "O") {
    oScore++
  }
  /////////////////////////////0,0
  if (topArray[0][0] === "O" && middleArray[0][1] === "O" && bottomArray[0][2] === "O") {
    oScore++
  }
  if (topArray[0][0] === "O" && middleArray[1][0] === "O" && bottomArray[2][0] === "O") {
    oScore++
  }
  if (topArray[0][0] === "O" && middleArray[1][1] === "O" && bottomArray[2][2] === "O") {
    oScore++
  }
  if (topArray[0][0] === "O" && middleArray[0][0] === "O" && bottomArray[0][0] === "O") {
    oScore++
  }
  //////////////////////////////0,2
  if (topArray[0][2] === "O" && middleArray[0][2] === "O" && bottomArray[0][2] === "O") {
    oScore++
  }
  if (topArray[0][2] === "O" && middleArray[0][1] === "O" && bottomArray[0][0] === "O") {
    oScore++
  }
  if (topArray[0][2] === "O" && middleArray[1][1] === "O" && bottomArray[2][0] === "O") {
    oScore++
  }
  if (topArray[0][2] === "O" && middleArray[1][2] === "O" && bottomArray[2][2] === "O") {
    oScore++
  }
  //////////////////////////////2,0
  if (topArray[2][0] === "O" && middleArray[2][0] === "O" && bottomArray[2][0] === "O") {
    oScore++
  }
  if (topArray[2][0] === "O" && middleArray[1][0] === "O" && bottomArray[0][0] === "O") {
    oScore++
  }
  if (topArray[2][0] === "O" && middleArray[1][1] === "O" && bottomArray[0][2] === "O") {
    oScore++
  }
  if (topArray[2][0] === "O" && middleArray[2][1] === "O" && bottomArray[2][2] === "O") {
    oScore++
  }
  //////////////////////////////2,2
  if (topArray[2][2] === "O" && middleArray[2][2] === "O" && bottomArray[2][2] === "O") {
    oScore++
  }
  if (topArray[2][2] === "O" && middleArray[1][2] === "O" && bottomArray[0][2] === "O") {
    oScore++
  }
  if (topArray[2][2] === "O" && middleArray[2][1] === "O" && bottomArray[2][0] === "O") {
    oScore++
  }
  if (topArray[2][2] === "O" && middleArray[1][1] === "O" && bottomArray[0][0] === "O") {
    oScore++
  }
  //////////////////////////////0,1
  if (topArray[0][1] === "O" && middleArray[0][1] === "O" && bottomArray[0][1] === "O") {
    oScore++
  }
  if (topArray[0][1] === "O" && middleArray[1][1] === "O" && bottomArray[2][1] === "O") {
    oScore++
  }
  //////////////////////////////1,0
  if (topArray[1][0] === "O" && middleArray[1][0] === "O" && bottomArray[1][0] === "O") {
    oScore++
  }
  if (topArray[1][0] === "O" && middleArray[1][1] === "O" && bottomArray[1][2] === "O") {
    oScore++
  }
  //////////////////////////////1,2
  if (topArray[1][2] === "O" && middleArray[1][2] === "O" && bottomArray[1][2] === "O") {
    oScore++
  }
  if (topArray[1][2] === "O" && middleArray[1][1] === "O" && bottomArray[1][0] === "O") {
    oScore++
  }
  //////////////////////////////2,1
  if (topArray[2][1] === "O" && middleArray[2][1] === "O" && bottomArray[2][1] === "O") {
    oScore++
  }
  if (topArray[2][1] === "O" && middleArray[1][1] === "O" && bottomArray[0][1] === "O") {
    oScore++
  }
  //////////////////////////////1,1
  if (topArray[1][1] === "O" && middleArray[1][1] === "O" && bottomArray[1][1] === "O") {
    oScore++
  }
}