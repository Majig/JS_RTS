var selectedUnits = [];

// canvas and context
var canvas, canvasContext;

window.onload = function () {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  var FPS = 30;
  setInterval(function () {
    moveEverything();
    drawEverything();
  }, 1000 / FPS);

  canvas.addEventListener("mousemove", mousemoveHandler);
  canvas.addEventListener("mousedown", mousedownHandler);
  canvas.addEventListener("mouseup", mouseupHandler);

  populateTeam(playerUnits, PLAYER_START_UNITS, true);
  populateTeam(enemyUnits, ENEMY_START_UNITS, false);
}

function moveEverything() {
  for (var i = 0; i < allUnits.length; i++) {
    allUnits[i].move();
  }

  removeDeadUnits();
  checkAndHandleVictory();
}

function drawEverything() {
  colorRect(0, 0, canvas.width, canvas.height, "black");

  for (var i = 0; i < allUnits.length; i++) {
    allUnits[i].draw();
  }

  for (var i = 0; i < selectedUnits.length; i++) {
    selectedUnits[i].drawSelectionBox();
  }

  if (isMouseDragging) {
    coloredOutlineRectCornerToCorner(lassoX1, lassoY1, lassoX2, lassoY2, "yellow");
  }
}