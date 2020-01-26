// Create variables

var startBtn = document.getElementById("startBtn");
var timeLeft = document.querySelector(".timeLeft");
var pointsEarned = document.querySelector(".Score");
startBtn.addEventListener("click", function() {
  startQuiz();
  // startScore();
});
// startBtn.addEventListener("click", function() {
//   showQuestions();
// });

// Do I need to create a different variable for each question to have each question appear
// individually?

var questionsArr = [
  {
    question: "What method starts a timer in Javascript?",
    choices: ["Function", "setInterval", "clearinterval"],
    answer: "setInerval"
  },
  {
    question: "Which symbol is associated with an ID in CSS?",
    choices: ["#", "$", "."],
    answer: "#"
  },
  {
    question: "What does API(in terms of Web Development) stand for?",
    choices: [
      "Advanced Placement Index",
      "Application Programing Interfacing",
      "Alpha Pi Iota"
    ],
    answer: "Application Programming Interfacing"
  },
  {
    question: "What helps give style to a website?",
    choices: ["CSS", "HTML", "JavaScript"],
    answer: "CSS"
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
    //Grab the question
    var questionString = questionsArr[i].question;
    // Show the user the question

    var displayQuestion = document.getElementById("questions");
    displayQuestion.innerHTML = questionString;

    // Grab the choices
    var choicesString = questionsArr[i].choices[0];
    var choicesString = questionsArr[i].choices[1];
    var choicesString = questionsArr[i].choices[2];

    // // Show the user the choices
    var displayChoices = document.getElementById("choiceA");
    displayChoices.innerHTML = choicesString;

    var displayChoices = document.getElementById("choiceB");
    displayChoices.innerHTML = choicesString;

    var displayChoices = document.getElementById("choiceC");
    displayChoices.innerHTML = choicesString;

    // console.log(questionsArr[i].title);
    for (j = 0; j < questionsArr[i].choices.length; j++) {
      // console.log(questionsArr[i].choices[j]);
      // for (k = 0; k < questionsArr[k].answer.length; k++) {
      //   console.log(questionsArr[k].answer[k]);
      // }
    }
  }
}

// var div = document.createElement("card");
// div.setAttribute("#questions", questionsArr);

// document.appendChild("questions");

// // Create a function to take score
// function startScore() {
//   var scoreinterval = setInterval(function() {
//     totalPoints--;
//     Score.textContent = "Points Earned: ";
//   });
// }
