const question = document.getElementById("question-title");
const options = Array.from(document.getElementsByClassName("answer"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Quiz Questions
let questions = [
    
    {
        question: "What is the capital of Ireland?",
        answer1: "Dublin",
        answer2: "London",
        answer3: "Paris",
        answer4: "Madrid",
        correctAnswer: 1
    },

    {
        question: "What is the capital of Italy?",
        answer1: "Dublin",
        answer2: "Rome",
        answer3: "Paris",
        answer4: "Madrid",
        correctAnswer: 2
    },

    {
        question: "What is the capital of Spain?",
        answerOne: "Dublin",
        answerTwo: "Rome",
        answerThree: "Paris",
        answerFour: "Madrid",
        correctAnswer: 4
    },

    { 
     
    {
        question: "What is the capital of France?",
        answer1: "Dublin",
        answer2: "Rome",
        answer3: "Paris",
        answer4: "Madrid",
        correctAnswer: 3
    },

    {
        question: "What is the capital of Portugal?",
        answer1: "Lisbon",
        answer2: "Rome",
        answer3: "Paris",
        answer4: "Madrid",
        correctAnswer: 1
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


