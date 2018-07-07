// team arrays and clear handling switch
var playerUnits = [];
var enemyUnits = [];
var allUnits = [];
var anyNewUnitsToClear = false;

// tuning constants
const PLAYER_START_UNITS = 20;
const ENEMY_START_UNITS = 15;

function addNewUnitToTeam(spawnedUnit, fightsForTeam) {
  fightsForTeam.push(spawnedUnit);
  allUnits.push(spawnedUnit);
}

function populateTeam(whichTeam, howMany, isPlayerControlled) {
  for (var i = 0; i < howMany; i++) {
    var spawnUnit = new unitClass();
    spawnUnit.resetAndSetPlayerTeam(isPlayerControlled);
    addNewUnitToTeam(spawnUnit, whichTeam);
  }
}

function findClosestUnitInRange(fromX, fromY, maxRange, inUnitList) {
  var nearestUnitDist = maxRange;
  var nearestUnitFound = null;

  for (var i = 0; i < inUnitList.length; i++) {
    var distTo = inUnitList[i].distFrom(fromX, fromY);

    if (distTo < nearestUnitDist) {
      nearestUnitDist = distTo;
      nearestUnitFound = inUnitList[i];
    }
  }
  return nearestUnitFound;
}

function soonCheckUnitsToClear() {
  anyNewUnitsToClear = true;
}

function removeDeadUnitsFromList(fromArray) {
  for (var i = fromArray.length - 1; i >= 0; i--) {
    if (fromArray[i].isDead) {
      fromArray.splice(i, 1);
    }
  }
}

function removeDeadUnits() {
  if (anyNewUnitsToClear) {
    removeDeadUnitsFromList(allUnits);
    removeDeadUnitsFromList(playerUnits);
    removeDeadUnitsFromList(enemyUnits);
    removeDeadUnitsFromList(selectedUnits);

    anyNewUnitsToClear = false;
  }
}

function checkAndHandleVictory() {
  if (playerUnits.length == 0 && enemyUnits.length == 0) {
    document.getElementById("debugText").innerHTML = "IT'S A DRAW!";
  } else if (playerUnits.length == 0) {
    document.getElementById("debugText").innerHTML = "ENEMY TEAM WON!";
  } else if (enemyUnits.length == 0) {
    document.getElementById("debugText").innerHTML = "PLAYER TEAM WON!";
  }
}