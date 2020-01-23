// Create variables

var startBtn = document.getElementById("startBtn");
var timeLeft = document.querySelector(".timeLeft");
startBtn.addEventListener("click", function() {
  startQuiz();
});
var questionsArr = [
  {
    title: "What method starts a timer in Javascript?",
    choices: ["Function", "setInterval", "clearinterval"],
    answer: "setInerval"
  },
  {
    title: "Which symbol is associated with an ID in CSS?",
    choices: ["#", "$", "."],
    answer: "#"
  },
  {
    title: "What does API(in terms of Web Development) stand for?",
    choices: [
      "Advanced Placement Index",
      "Application Programing Interfacing",
      "Alpha Pi Iota"
    ],
    answer: "Application Programming Interfacing"
  },
  {
    title: "Which symbol is associated with an ID in CSS?",
    choices: ["#", "$", "."],
    answer: "#"
  }
];

// Universal variables
var totalSeconds = 60;

// Function to start timer
function startQuiz() {
  var timerInterval = setInterval(function() {
    totalSeconds--;
    timeLeft.textContent = "Time Left: " + totalSeconds;

    function stopClock() {
      clearTimeout(startQuiz);
    }

    if (totalSeconds === 0) {
      clearInterval(startQuiz);
    }
  }, 1000);

  for (i = 0; i < questionsArr.length; i++) {
    console.log(questionsArr[i].title);
    for (j = 0; j < questionsArr[i].choices.length; j++) {
      console.log(questionsArr[i].choices[j]);
    }
  }
}

// Next steps:
// 1. create function to write the first question
//
