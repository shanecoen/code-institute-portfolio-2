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
const questions = [{
    id: 0,
    question: "What is the capital of Ireland?",
    answers: [
        {option: "Dublin", answer: true},
        {option: "London", answer: false},
        {option: "Paris", answer: false},
        {option: "Barcelona", answer: false}
    ]},
    { 
    id: 1,
    question: "What is the capital of Italy?",
    answers: [
        {option: "Dublin", answer: false},
        {option: "Rome", answer: true},
        {option: "Turin", answer: false},
        {option: "Madrid", answer: false}
    ]},
    { 
    id: 2,
    question: "What is the capital of Spain?",
    answers: [
        {option: "Dublin", answer: false},
        {option: "Rome", answer: false},
        {option: "Madrid", answer: true},
        {option: "Paris", answer: false}
    ]},
    { 
    id: 3,  
    question: "What is the capital of France?",
    answers: [
        {option: "London", answer: false},
        {option: "Madrid", answer: false},
        {option: "Dublin", answer: false},
        {option: "Paris", answer: true}
    ]},
    { 
    id: 4,   
    question: "What is the capital of Germany?",
    answers: [
        {option: "Berlin", answer: true},
        {option: "Dublin", answer: false},
        {option: "London", answer: false},
        {option: "Paris", answer: false}
    ]}
]

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


}

