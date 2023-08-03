let Matrix = [
  ["empty", "empty", "empty"],
  ["empty", "empty", "empty"],
  ["empty", "empty", "empty"],
];
let Score = [0,0];
let turn;
let audioWin = new Audio("./asset/sounds/mixkit-achievement-bell-600.wav");
let audioDraw = new Audio("./asset/sounds/mixkit-losing-bleeps-2026.wav"); //
let clickaudio = new Audio("./asset/sounds/ui-click-97915.mp3");
resetTurn(turn);
window.addEventListener("DOMContentLoaded", () => {
  const C00 = document.getElementById("C00");
  addeventL(C00, C00.id);
  const C01 = document.getElementById("C01");
  addeventL(C01, C01.id);
  const C02 = document.getElementById("C02");
  addeventL(C02, C02.id);
  const C10 = document.getElementById("C10");
  addeventL(C10, C10.id);
  const C11 = document.getElementById("C11");
  addeventL(C11, C11.id);
  const C12 = document.getElementById("C12");
  addeventL(C12, C12.id);
  const C20 = document.getElementById("C20");
  addeventL(C20, C20.id);
  const C21 = document.getElementById("C21");
  addeventL(C21, C21.id);
  const C22 = document.getElementById("C22");
  addeventL(C22, C22.id);
  document.getElementById("reset").addEventListener("click", () => {
    clickaudio.play();
    Matrix = [
      ["empty", "empty", "empty"],
      ["empty", "empty", "empty"],
      ["empty", "empty", "empty"],
    ];
    resetTurn(turn);
    const boxes = document.querySelectorAll(
      "#C00.Box.right-border.bottom-border, #C01.Box.right-border.bottom-border, #C02.Box.bottom-border, #C10.Box.right-border.bottom-border, #C11.Box.right-border.bottom-border, #C12.Box.bottom-border, #C20.Box.right-border, #C21.Box.right-border, #C22.Box"
    );
    boxes.forEach((box) => {
      box.innerHTML = "&nbsp";
    });
  });
  document.getElementById("resetScore").addEventListener("click", () => {
    clickaudio.play();
    document.getElementById("Score").innerHTML = "O:0 - 0:X";
    Score = [0,0];
  })
});
function resetTurn(turn) {
  turn = Math.floor(Math.random() * 1);
}

function addeventL(Checkbox, id) {
  if (Checkbox) {
    Checkbox.addEventListener("click", () => {
      if (Matrix[id[1]][id[2]] == "empty") {
        console.log("checkbox is clicked");
        MarkCheckbox(id);
      }
    });
  }
}
function MarkCheckbox(id) {
  let turnmsg = "   Turn of player ";

  if (turn == 0) {
    document.getElementById(id).innerHTML = "O";
    Matrix[id[1]][id[2]] = "O";
    turn = 1;
    turnmsg += " X";
  } else {
    document.getElementById(id).innerHTML = "X";
    Matrix[id[1]][id[2]] = "X";
    turn = 0;
    turnmsg += " O";
  }
  let GameR = GameResualt(Matrix);
  if (typeof GameR == "string" && GameR != "empty") {
    Matrix = [
      ["game_ended", "game_ended", "game_ended"],
      ["game_ended", "game_ended", "game_ended"],
      ["game_ended", "game_ended", "game_ended"],
    ];
    document.getElementById("Note").innerHTML =
      "Player " + GameR + " Won " + String.fromCodePoint(0x1f389);
    audioWin.play();
      updateScore(GameR);
  } else if (GameR == false && GameStateCheck(Matrix) == true) {
    document.getElementById("Note").innerHTML = "A Draw";
    audioDraw.play();
  } else {
    document.getElementById("Note").innerHTML = turnmsg;
  }
}
function updateScore(Winner) {
    if(Winner == "X"){
        Score[1] +=1;
    }
    else{
        Score[0] +=1;
    }
    document.getElementById("Score").innerHTML = "O:"+Score[0].toString()+" - "+Score[1].toString()+":X";
}
function GameStateCheck(Matrix) {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; i < 3; i++) {
      if (Matrix[i][j] == "empty") {
        return false;
      }
    }
  }
  return true;
}
function GameResualt(Matrix) {
  try {
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (
          Matrix[i][j] == Matrix[i][j + 1] &&
          Matrix[i][j + 1] == Matrix[i][j + 2]
        ) {
          return Matrix[i][j];
        } else if (
          Matrix[i][j] == Matrix[i + 1][j] &&
          Matrix[i + 1][j] == Matrix[i + 2][j]
        ) {
          return Matrix[i][j];
        }
      }
    }
  } catch (error) {
    console.error("error msg:", error.message);
  }
  if (Matrix[1][1] == Matrix[0][0] && Matrix[0][0] == Matrix[2][2]) {
    return Matrix[1][1];
  } else if (Matrix[1][1] == Matrix[0][2] && Matrix[0][2] == Matrix[2][0]) {
    return Matrix[1][1];
  }
  return false;
}
