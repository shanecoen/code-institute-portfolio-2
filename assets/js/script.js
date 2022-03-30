// Declare Variables To Represent Elements In Document
let questionText = document.getElementById('question-title');
let userScore = document.getElementById('total-score');
let answerOne = document.getElementById('answer1');
let answerTwo = document.getElementById('answer2');
let answerThree = document.getElementById('answer3');
let answerFour = document.getElementById('answer4');
let restartBtn = document.getElementById('button-restart');
let submitBtn = document.getElementById('button-submit');

// Declare Site Interactive variables
let startingQuestion = 0;
let score = 0;

// Quiz Questions
const questions = [
    
    {
        "question": "What is the capital of Ireland?",
        "answerOne": "Dublin",
        "answerTwo": "London",
        "answerThree": "Paris",
        "answerFour": "Madrid",
        "correctAnswer": "1"
    },

    {
        "question": "What is the capital of Italy?",
        "answerOne": "Dublin",
        "answerTwo": "Rome",
        "answerThree": "Paris",
        "answerFour": "Madrid",
        "correctAnswer": "2"
    },

    {
        "question": "What is the capital of Spain?",
        "answerOne": "Dublin",
        "answerTwo": "Rome",
        "answerThree": "Paris",
        "answerFour": "Madrid",
        "correctAnswer": "4"
    },

    { 
     
    {
        "question": "What is the capital of France?",
        "answerOne": "Dublin",
        "answerTwo": "Rome",
        "answerThree": "Paris",
        "answerFour": "Madrid",
        "correctAnswer": "3"
    },

    {
        "question": "What is the capital of Portugal?",
        "answerOne": "Lisbon",
        "answerTwo": "Rome",
        "answerThree": "Paris",
        "answerFour": "Madrid",
        "correctAnswer": "1"
    },
];

// Set Start
let start = true;

// Iterate
function iterateQuestions(id) {
    // Setting The Question
    let questionText = document.getElementById('question-title');
    
    question-title.innerText = questions[id].question;

    // Getting The Options
    let answerOne = document.getElementById('answer1');
    let answerTwo = document.getElementById('answer2');
    let answerThree = document.getElementById('answer3');
    let answerFour = document.getElementById('answer4');

    // Providing Option text
    answerOne.InnerText = questions[id].answers[0].text;
    answerTwo.InnerText = questions[id].answers[1].text;
    answerThree.InnerText = questions[id].answers[2].text;
    answerFour.InnerText = questions[id].answers[3].text;

    // Providing The True Or False Values To The Options
    answerOne.value = questions[id].answers[0].isCorrect;
    answerTwo.value = questions[id].answers[1].isCorrect;
    answerThree.value = questions[id].answers[2].isCorrect;
    answerFour.value = questions[id].answers[3].isCorrect;

    let selected = "";
}

// Grabbing The Submit Button


