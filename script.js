// Create variables

var startBtn = document.getElementById("startBtn");
var timeLeft = document.querySelector(".timeLeft");
var questions = document.startBtn.addEventListener("click", function() {
  startQuiz();
});

// Universal variables
var totalSeconds = 60;

// Function to start timer
function startQuiz() {
  var timerInterval = setInterval(function() {
    totalSeconds--;
    timeLeft.textContent = "Time Left: " + totalSeconds;

    if (totalSeconds === 0) {
      clearInterval(startQuiz);
    }
  }, 1000);
}

// Next steps:
// 1. create function to write the first question
//
