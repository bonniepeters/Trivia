const quiz = document.querySelector(".quiz");
const scoreBoard = document.querySelector(".scroe");
let score = 0;

// class to follow for each question
class Question {
    constructor(questionAsked, answerChoices) {
    this.questionAsked = questionAsked;
    this.answerChoices = answerChoices;
    }
    userChoice(choice) {
        if (choice.check = true) {
            score++
        }
    }
};
// Array of questions and their answers
    // Each question should have an array of 4 possible answers with one having a check boolean set to true
const questions = [
    new Question(`What is Geoffrey the Butler's last name?`, [{answer: `Smith`, check: false}, {answer: `Banks`, check: false}, {answer: `Williams`, check: false}, {answer: `Butler`, check: true}]),
    new Question(`What song does Carlton do the iconic "Carlton Dance" to?`, [{answer: `It's Not Unusual`, check: true}, {answer: `Jump On It`, check: false}, {answer: `She's a Lady`, check: false}, {answer: `Gettin' Jiggy Wit It`, check: false}]),
    new Question(`What college do Will and Carlton attend?`, [{answer: `UCLA`, check: false}, {answer: `ULA`, check: true}, {answer: `USC`, check: false}, {answer: `Cal Poly`, check: false}]),
    new Question(`When Will is kicked out of his apartment, where does he end up living?`, [{answer: `West Philadelphia`, check: false}, {answer: `Down the street from his aunt and uncle`, check: false}, {answer: `Hollywood`, check: false}, {answer: `The pool house`, check: true}]),
    new Question(`What food is served where Ashley works in the mall?`, [{answer: `Corn dogs`, check: true}, {answer: `Pizza`, check: false}, {answer: `Ice cream`, check: false}, {answer: `Tacos`, check: false}]),
    new Question(`Which of these is NOT one of Aunt Vivian's sisters' names?`, [{answer: `Vy`, check: false}, {answer: `Helen`, check: false}, {answer: `Janice`, check: false}, {answer: `Shawna`, check: true}]),
    new Question(`What music group inspired Nicky's name?`, [{answer: `Rob Base and DJ E-Z Rock`, check: false}, {answer: `Earth, Wind, and Fire`, check: false}, {answer: `Boyz II Men`, check: true}, {answer: `Bell Biv DeVoe`, check: false}]),
    new Question(`What was Hilary's job before getting her talk show?`, [{answer: `Singer`, check: false}, {answer: `Waitress`, check: false}, {answer: `Weather Girl`, check: true}, {answer: `Dancer`, check: false}]),
    new Question(`Where did Uncle Phil propose to Aunt Vivian?`, [{answer: `Soul Train`, check: true}, {answer: `Red Lobster`, check: false}, {answer: `In the car`, check: true}, {answer: `In a courthouse`, check: false}]),
    new Question(`What new career does Uncle Phil go into?`, [{answer: `Judge`, check: true}, {answer: `Priest`, check: false}, {answer: `Scientist`, check: true}, {answer: `Corrections Officer`, check: false}]),
];
console.log(questions);

// function to create questions
questions.forEach(function(question) {
    let quizQuestion = document.createElement("li");
    let questionAnswerList = document.createElement("div");
    quizQuestion.className = "quiz questions";
    quizQuestion.innerText = question.questionAsked;
    console.log(question);
    console.log(quizQuestion);
    questionAnswerList.className = "answers"
    for (let i = 0; i < 4; i++) {
        let questionAnswerListItem = document.createElement("input");
        questionAnswerListItem.setAttribute("type", "button");
        questionAnswerListItem.className = "quiz answers";
        questionAnswerListItem.value = question.answerChoices[i].answer;
        //append questions and answers to quiz
        quiz.appendChild(quizQuestion);
        quizQuestion.appendChild(questionAnswerList);
        questionAnswerList.appendChild(questionAnswerListItem);
        };
});


console.log(questions);
console.log(question);