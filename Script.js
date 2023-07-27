let team1Score = 0;
let team2Score = 0;
const initialGameTime = 600; // 10 minutes (in seconds)
let gameTime = initialGameTime;
let quarter = 1;
let timerInterval;

function updateScoreboard() {
  document.getElementById('team1-score').textContent = team1Score;
  document.getElementById('team2-score').textContent = team2Score;
  document.getElementById('quarter').textContent = `${getQuarterLabel(quarter)}`;
}

function getQuarterLabel(quarter) {
  // Map the quarter number to the corresponding label
  switch (quarter) {
    case 1:
      return 'Q1';
    case 2:
      return 'Q2';
    case 3:
      return 'Q3';
    case 4:
      return 'Q4';
    default:
      return 'OT';
  }
}

function incrementScore(team, points) {
  if (team === 1) {
    team1Score += points;
  } else if (team === 2) {
    team2Score += points;
  }
  updateScoreboard();
}

function decrementScore(team, points) {
  if (team === 1) {
    team1Score = Math.max(0, team1Score - points); // Ensure the score does not go below zero.
  } else if (team === 2) {
    team2Score = Math.max(0, team2Score - points); // Ensure the score does not go below zero.
  }
  updateScoreboard();
}

function updateTime() {
    if (gameTime > 0) {
      const minutes = Math.floor(gameTime / 60);
      const seconds = gameTime % 60;
      document.getElementById('game-time').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      document.getElementById('current-time').textContent = `Game Running`;
      gameTime-1; // Decrement gameTime for the countdown.
    } else {
      pauseGame();
      document.getElementById('game-time').textContent = '0:00';
      document.getElementById('current-time').textContent = `End of ${getQuarterLabel(quarter)}`;
    }
}

function startGame() {
  if (!timerInterval) {
    updateScoreboard();
    updateTime();
    timerInterval = setInterval(function() {
      gameTime--;
      updateTime();
    }, 1000);
  }
}

function pauseGame() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetGame() {
  pauseGame();
  team1Score = 0;
  team2Score = 0;
  updateScoreboard();
  gameTime = initialGameTime;
  quarter = 1;
  document.getElementById('game-time').textContent = '10:00';
  document.getElementById('current-time').textContent = 'Game not started';
}

function changeQuarter(delta) {
  quarter += delta;
  if (quarter < 1) {
    quarter = 1;
  }
  updateScoreboard();
}

function addMinutes(minutes) {
  gameTime += minutes * 60;
  updateScoreboard();
}

function subtractMinutes(minutes) {
  gameTime -= minutes * 60;
  if (gameTime < 0) {
    gameTime = 0;
  }
  updateScoreboard();
}

function addSeconds(seconds) {
  gameTime += seconds;
  updateScoreboard();
}

function subtractSeconds(seconds) {
  gameTime -= seconds;
  if (gameTime < 0) {
    gameTime = 0;
  }
  updateScoreboard();
}

function addMinutes(minutes) {
    gameTime += minutes * 60;
    updateScoreboard();
  }
  
  function subtractMinutes(minutes) {
    gameTime -= minutes * 60;
    if (gameTime < 0) {
      gameTime = 0;
    }
    updateScoreboard();
  }
  
  function addSeconds(seconds) {
    gameTime += seconds;
    updateScoreboard();
  }
  
  function subtractSeconds(seconds) {
    gameTime -= seconds;
    if (gameTime < 0) {
      gameTime = 0;
    }
    updateScoreboard();
  }

updateScoreboard();
