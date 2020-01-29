// Create variables

var startBtn = document.getElementById("startBtn");
var timeLeft = document.querySelector(".timeLeft");
var pointsEarned = document.querySelector(".Score");
var createBtn;
var choicesDiv;
var userAnswers = [];
// var emptyObj = 

startBtn.addEventListener("click", function() {
  startQuiz();
});


// Questions Array with questions, choices, and answers
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
    var displayQuestion = document.getElementById("questions");
    var questionString = questionsArr[i].question;
    var questionDiv = document.createElement("div");
    $(displayQuestion).append(questionDiv);
    // Show the user the question

    var questionP = document.createElement("p");
    questionP.textContent = questionString;
    $(questionDiv).append(questionP);
    // Grab the choices
    // var choicesString = questionsArr[i].choices[0];
    // var choicesString = questionsArr[i].choices[1];
    // var choicesString = questionsArr[i].choices[2];

    // // Show the user the choices

    // // create a function or an if statement that will determine the correct or incorrect answer
    // if (userChoice == questionsArr.answer) {
    //   alert("Correct!");
    // } else "Incorrect!";

    // console.log(questionsArr[i].title);
    for (j = 0; j < questionsArr[i].choices.length; j++) {
      // var displayChoices = document.getElementById("options");
      createBtn = document.createElement("button");
      choicesDiv = document.createElement("div");
      createBtn.textContent = questionsArr[i].choices[j];
      $(createBtn).attr("value", questionsArr[i].choices[j]);
      $(createBtn).attr("class", "choiceBtn");
      // createBtn.onclick = function() {
      //   keyStroke(this);
      // };
      $(choicesDiv).append(createBtn);
      $(questionDiv).append(choicesDiv);
    }
  }
}

// Click function
$("Button").on("click", ".choiceBtn", function() {
  var userClick = $(this).val();
  // console.log($(this).val());

  // if/else statement
  userAnswers.push(userClick);
  // console.log(userAnswers);
});

// for loop that loops through the userAnswers array and compares to correct answer for question
// for (i = 0; (i < questionsArr[i].choices) {
//   userAnswers == questionsArr[i].answer;

// }
// it can be the same "i"
// if statement should be what the user clicked should match the correct answer
