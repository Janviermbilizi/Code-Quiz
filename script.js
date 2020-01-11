var score = document.querySelector("#higherscores");
var timeCounter = document.querySelector("#timectr");
var startQuiz = document.querySelector("#quiz");
var section1 = document.querySelector("#section1");
var modalEl = document.querySelector("#modal-container");
var viewScore = document.querySelector(".higherscores");
var score = 0;
var currentIndex = 0;
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
// score
//function scorepoint(score, displayScore) {
// var score = 0;
//displayScore = document.querySelector(".higherscores");
//displayScore.textContent = "View higherscores: " + score;
//}
// timer
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = "Time: " + minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

// $(document).ready(function () {
startQuiz.addEventListener("click", function(event) {
  event.preventDefault();
  //score
  viewScore.textContent = "View higherscores: " + score++;

  // startTimer()
  var fiveMinutes = 60 * 5,
    display = document.querySelector(".timectr");
  startTimer(fiveMinutes, display);

  section1.style.display = "none";

  nextQuestion();
});

function nextQuestion() {
  modalEl.innerHTML = "";
  var title = questions[currentIndex].title;
  var choices = questions[currentIndex].choices;

  // title add attribute of element ul
  var newh2 = document.createElement("h2");
  newh2.innerText = title;

  // append
  modalEl.appendChild(newh2);
  modalEl.style.display = "";

  for (var x = 0; x < choices.length; x++) {
    var thisChoice = choices[x];
    //
    var choice = document.createElement("button");

    choice.setAttribute(
      "style",
      "background: teal; color: white; font-size: 18px;"
    );
    choice.innerText = thisChoice;
    // append
    modalEl.appendChild(choice);
    choice.setAttribute("value", choices[x]);
    choice.addEventListener("click", function(event) {
      event.preventDefault();
      var picked = event.target.value;

      questionWasClicked(picked);
      // console.log(choice);
    });
    function questionWasClicked(picked) {
      if (picked == questions[currentIndex].answer) {
        var br = document.createElement("br");
        var h = document.createElement("p");
        var p = document.createTextNode("Correct answer!!");
        var correct = h.appendChild(p);
        modalEl.appendChild(br);
        modalEl.appendChild(correct);
        viewScore.textContent = "View higherscores: " + score++;
      } else {
        var br = document.createElement("br");
        var h = document.createElement("p");
        var p = document.createTextNode("wrong answer!!");
        var wrong = h.appendChild(p);
        modalEl.appendChild(br);
        modalEl.appendChild(wrong);
      }

      currentIndex++;
      if (currentIndex <= 4) {
        setInterval(function() {
          nextQuestion();
        }, 3000);
      } else {
        displayFinalScore();
      }
    }
  }
}

// choices add attribute element li
//append
// };
// var quiz1 = document.querySelector(questions[0].title.choices);
//var annswer1 = document.querySelector(questions[0].answer)
//Close modal

window.onload = function() {};

function close() {
  modalEl.style.display = "none";
}
close();
