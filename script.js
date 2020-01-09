var score = document.querySelector("#higherscores");
var timeCounter = document.querySelector("#timectr");
var startQuiz = document.querySelector("#quiz");
var modalEl = document.querySelector("#modal-container");

// list of all questions, choices, and answers
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within----.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store----.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    title:
      "String values must be enclosed within when being assigned to variables----.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is----:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }
];

startQuiz.addEventListener("click", function(event) {
  event.preventDefault();
  var quiz1 = document.createElement("h3");
  var quiz1 = document.querySelector(questions[0].title);
  modalEl.appendChild(quiz1);

  // var quiz1 = document.querySelector(questions[0].title.choices);
  //var annswer1 = document.querySelector(questions[0].answer)
});

//Close modal
function close() {
  modalEl.style.display = "none";
}
