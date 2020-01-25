// Create variables

var startBtn = document.getElementById("startBtn");
var timeLeft = document.querySelector(".timeLeft");
var pointsEarned = document.querySelector(".Score");
startBtn.addEventListener("click", function() {
  startQuiz();
  startBtn.addEventListener("click", function() {
    startScore();
  });
});
// startBtn.addEventListener("click", function() {
//   showQuestions();
// });

// Do I need to create a different variable for each question to have each question appear
// individually?

var questionsArr = [
  {
    prompt: "What method starts a timer in Javascript?",
    choices: ["Function", "setInterval", "clearinterval"],
    answer: "setInerval"
  },
  {
    prompt: "Which symbol is associated with an ID in CSS?",
    choices: ["#", "$", "."],
    answer: "#"
  },
  {
    prompt: "What does API(in terms of Web Development) stand for?",
    choices: [
      "Advanced Placement Index",
      "Application Programing Interfacing",
      "Alpha Pi Iota"
    ],
    answer: "Application Programming Interfacing"
  },
  {
    prompt: "Which symbol is associated with an ID in CSS?",
    choices: ["#", "$", "."],
    answer: "#"
  }
];

// Universal variables
var totalSeconds = 60;
var totalPoints = 4;

// Function to start timer
function startQuiz() {
  var timerInterval = setInterval(function() {
    totalSeconds--;
    timeLeft.textContent = "Time Left: " + totalSeconds;
    if (totalSeconds === 0) {
      clearInterval(startQuiz);
    }
  }, 1000);

  // Create a function that will show the questions on the page

  for (i = 0; i < questionsArr.length; i++) {
    var answers = window.prompt(questionsArr[i].prompt);
    if (answer == questionsArr[i].answer) {
      score++;
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
    if (answer == questionsArr[j].answer) {
      score++;
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
    if (answer == questionsArr[k].answer) {
      score++;
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
    // console.log(questionsArr[i].title);
    for (j = 0; j < questionsArr[i].choices.length; j++) {
      // console.log(questionsArr[i].choices[j]);
      // for (k = 0; k < questionsArr[k].answer.length; k++) {
      //   console.log(questionsArr[k].answer[k]);
      // }
    }
  }
}

var div = document.createElement("card");
div.setAttribute("#questions", questionsArr);

document.appendChild("questions");

// Create a function to take score
function startScore() {
  var scoreinterval = setInterval(function() {
    totalPoints--;
    Score.textContent = "Points Earned: ";
  });
}
