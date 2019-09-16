// class to follow for each question
class Question {
    constructor(questionNumber, questionAsked, answerChoices) {
    this.questionNumber = questionNumber
    this.questionAsked = questionAsked;
    this.answerChoices = answerChoices;
    }
}

// function to create questions

// Test creating single question
let question1 = new Question(1,`What is Geoffrey the Butler's last name?`, [{answer: 'Smith', check: false}, {answer: 'Banks', check: false}, {answer: 'Williams', check: false}, {answer: 'Butler', check: true}]);

console.log(question1);
//append questions to quiz