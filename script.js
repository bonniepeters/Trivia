const game = document.querySelector(".game");
const quiz = document.querySelector(".quiz");
const start = document.querySelector(".start");
const end = document.getElementById("end");
const reset = document.getElementById("reset");
const scoreBoard = document.querySelector(".score");
const questionNumber = document.querySelector(".question-number");
const results = document.querySelector(".results");
const instructions = document.querySelector(".instructions");
let currentQuestionNumber = 0;
let currentQuestionIndex = 0;
let score = 0;
let currentQuestion = "";

// class to follow for each question
class Question {
  constructor(questionAsked, choices, answer, image) {
    this.questionAsked = questionAsked;
    this.choices = choices;
    this.answer = answer;
    this.image = image
  }
}

// Array of questions and their answers
// Each question has an array of 4 choices with one indicated as the answer
const questions = [
  new Question(
    `What is Geoffrey the Butler's last name?`,
    [`Smith`, `Banks`, `Williams`, `Butler`],
    `Butler`,
    `images/geoffrey.png`
  ),
  new Question(
    `What song does Carlton do the "Carlton Dance" to?`,
    [`It's Not Unusual`, `Jump On It`, `She's a Lady`, `Gettin' Jiggy Wit It`],
    `It's Not Unusual`,
    `images/carlton.png`
  ),
  new Question(
    `What college do Will and Carlton attend?`,
    [`UCLA`, `ULA`, `USC`, `Cal Poly`],
    `ULA`,
    `images/will-and-carlton.png`
  ),
  new Question(
    `What food is served where Ashley works?`,
    [`Corn dogs`, `Pizza`, `Ice cream`, `Tacos`],
    `Corn dogs`,
    `images/ashley.png`
  ),
  new Question(
    `Which of these is NOT one of Aunt Vivian's sisters`,
    [`Vy`, `Helen`, `Janice`, `Shawna`],
    `Shawna`,
    `images/vivian.png`
  ),
  new Question(
    `What music group inspired Nicky's name?`,
    [
      `Dru Hill`,
      `Earth, Wind, and Fire`,
      `Boyz II Men`,
      `Bell Biv DeVoe`
    ],
    `Boyz II Men`,
    `images/nicky.png`
  ),
  new Question(
    `What was Hilary's job before getting her talk show?`,
    [`Singer`, `Waitress`, `Weather Girl`, `Dancer`],
    `Weather Girl`,
    `images/hilary.png`
  ),
  new Question(
    `Where did Uncle Phil propose to Aunt Vivian?`,
    [`Soul Train`, `Red Lobster`, `In the car`, `In a courthouse`],
    `Soul Train`,
    `images/vivian-and-phil.png`
  ),
  new Question(
    `What new career does Uncle Phil go into?`,
    [`Judge`, `Priest`, `Scientist`, `Corrections Officer`],
    `Judge`,
    `images/phil.png`
  ),
  new Question(
    `Where does Will live after he loses his apartment?`,
    [`West Philadelphia`, `Down the street`, `Hollywood`, `The pool house`],
    `The pool house`,
    `images/will.png`
  )
];

function startGame() {
  game.style.display = "block";
  instructions.style.display = "none";
  start.style.display = "none";
  nextQuestion();
}

start.addEventListener("click", startGame);

// Render/append a question incrementally as the user selects "load next question"
function renderQuestion() {
  if (currentQuestionIndex < questions.length) {
    currentQuestion = questions[currentQuestionIndex];
    let renderedQuestion = document.createElement("div");
    let questionText = document.createElement("h2");
    let questionImage = document.createElement("IMG");
    let choices = document.createElement("div");
    questionText.innerHTML = currentQuestion.questionAsked;
    renderedQuestion.className = "question";
    questionImage.setAttribute("src", `${currentQuestion.image}`);
    choices.className = "choices";
    quiz.appendChild(renderedQuestion);
    renderedQuestion.appendChild(questionText);
    renderedQuestion.appendChild(questionImage);
    renderedQuestion.appendChild(choices);
    renderAnswers();
  } else {
    endGame();
  }
}

// Render/append answers to the current question
function renderAnswers() {
  let eachChoice = questions[currentQuestionIndex].choices;
  choices = document.querySelector(".choices");
  for (let q = 0; q < 4; q++) {
    choice = document.createElement("button");
    choice.className = "choice";
    choice.innerHTML = eachChoice[q];
    choices.appendChild(choice);
    choice.addEventListener("click", checkAnswer);
  }
}

function nextQuestion() {
  clearCurrentQuestion();
  renderQuestion();
  currentQuestionIndex++;
  currentQuestionNumber++;
  questionNumber.innerHTML = `Question ${currentQuestionNumber}`;
}

function clearCurrentQuestion() {
  let child = quiz.firstElementChild;
  while (child) {
    quiz.removeChild(child);
    child = quiz.firstElementChild;
  }
}

function incrementScore() {
  score++;
  scoreBoard.innerHTML = `Score: ${score}/10`;
}

function checkAnswer(evt) {
  if (evt.target.innerHTML == currentQuestion.answer) {
    incrementScore();
    nextQuestion();
  } else {
    nextQuestion();
  }
}

function endGame() {
  end.style.display = "block";
  renderResults();
}

function resetGame() {
  end.style.display = "none";
  currentQuestionIndex = 0;
  currentQuestion = "";
  currentQuestionNumber = 0;
  score = 0;
  scoreBoard.innerHTML = `Score: ${score}/10`;
  nextQuestion();
}

function renderResults() {
  if (score < 5) {
    results.innerHTML = `You got ${10-score} out of 10 wrong. Looks like you're up to no good.`;
  } else if (score < 8) {
    results.innerHTML = `You got ${score} out of 10 right. Not too bad, but you might end up sleeping in the pool house. Yo, homes smell ya later!`;
  } else {
    results.innerHTML = `You got ${score} out of 10 right. Look at you chillin' out maxin' relaxin' all cool!`;
  }
}

reset.addEventListener("click", resetGame);
