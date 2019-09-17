const quiz = document.querySelector(".quiz");
const next = document.querySelector("#next");
let currentQuestionIndex = 0;
let score = 0;
let currentQuestion = '';

next.addEventListener("click", nextQuestion);

// class to follow for each question
class Question {
    constructor(questionAsked, choices, answer) {
    this.questionAsked = questionAsked;
    this.choices = choices;
    this.answer = answer;
    }
};

// Array of questions and their answers
// Each question has an array of 4 choices with one indicated as the answer
const questions = [
    new Question(`What is Geoffrey the Butler's last name?`, [`Smith`, `Banks`, `Williams`, `Butler`], `Butler`),
    new Question(`What song does Carlton do the iconic "Carlton Dance" to?`, [`It's Not Unusual`, `Jump On It`, `She's a Lady`, `Gettin' Jiggy Wit It`], `It's Not Unusual`),
    new Question(`What college do Will and Carlton attend?`, [`UCLA`, `ULA`, `USC`, `Cal Poly`], `ULA`),
    new Question(`What food is served where Ashley works in the mall?`, [`Corn dogs`, `Pizza`, `Ice cream`, `Tacos`], `Corn dogs`),
    new Question(`Which of these is NOT one of Aunt Vivian's sisters' names?`, [`Vy`, `Helen`, `Janice`, `Shawna`], `Shawna`),
    new Question(`What music group inspired Nicky's name?`, [`Rob Base and DJ E-Z Rock`, `Earth, Wind, and Fire`, `Boyz II Men`, `Bell Biv DeVoe`], `Boyz II Men`),
    new Question(`What was Hilary's job before getting her talk show?`, [`Singer`, `Waitress`, `Weather Girl`, `Dancer`], `Weather Girl`),
    new Question(`Where did Uncle Phil propose to Aunt Vivian?`, [`Soul Train`, `Red Lobster`, `In the car`, `In a courthouse`], `Soul Train`),
    new Question(`What new career does Uncle Phil go into?`, [`Judge`, `Priest`, `Scientist`, `Corrections Officer`], `Judge`),
    new Question(`When Will is kicked out of his apartment, where does he end up living?`, [`West Philadelphia`, `Down the street`, `Hollywood`, `The pool house`], `The pool house`)
];

// Render/append a question incrementally as the user selects "load next question"
function renderQuestion() {
    if (currentQuestionIndex < questions.length) {
        currentQuestion = questions[currentQuestionIndex];
        let renderedQuestion = document.createElement("li");
        renderedQuestion.innerHTML = currentQuestion.questionAsked;
        quiz.appendChild(renderedQuestion);
    }
    renderAnswers();
    console.log(currentQuestion);
};

// Render/append answers to the current question
function renderAnswers() {
    let eachChoice = questions[currentQuestionIndex].choices;
    renderedQuestion = document.querySelector("li");
    for (let q = 0; q < 4; q++) {
        choice = document.createElement("button");
        choice.className = "choices";
        choice.innerHTML = eachChoice[q];
        renderedQuestion.appendChild(choice);
        choice.addEventListener("click", checkAnswer);
    }
};

function nextQuestion() {
    clearCurrentQuestion();
    renderQuestion();
    currentQuestionIndex++;

};

function clearCurrentQuestion() {
    let child = quiz.firstElementChild;
    while (child) {
        quiz.removeChild(child);
        child = quiz.firstElementChild;
        }
};

function incrementScore() {
    const scoreBoard = document.querySelector(".score");
    score++;
    scoreBoard.innerHTML = `Your current score: ${score}/10`
};

function checkAnswer(evt) {
    if (evt.target.innerHTML == currentQuestion.answer) {
        incrementScore();
    }
};