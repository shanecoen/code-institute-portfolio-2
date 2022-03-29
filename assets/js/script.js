// Declare Variables To Represent Elements In Document
let questionText = document.getElementById('question-title');
let userScore = document.getElementById('total-score');
let AnswerOne = document.getElementById('answer1');
let AnswerTwo = document.getElementById('answer2');
let AnswerThree = document.getElementById('answer3');
let AnswerFour = document.getElementById('answer4');
let restartBtn = document.getElementById('button-restart');
let submitBtn = document.getElementById('button-submit');

// Declare Site Interactive variables
let startingQuestion = 0;
let score = 0;

// Quiz Questions
let questions = [
  { question: "Question 1 - The answer is option 1?",
    answers: [
        {option: "Answer 1", answer: true},
        {option: "Answer 2", answer: false},
        {option: "Answer 3", answer: false},
        {option: "Answer 4", answer: false}
    ]},
    { question: "Question 2 - The answer is option 2?",
    answers: [
        {option: "Answer 1", answer: false},
        {option: "Answer 2", answer: true},
        {option: "Answer 3", answer: false},
        {option: "Answer 4", answer: false}
    ]},
    { question: "Question 3 - The answer is option 3?",
    answers: [
        {option: "Answer 1", answer: false},
        {option: "Answer 2", answer: false},
        {option: "Answer 3", answer: true},
        {option: "Answer 4", answer: false}
    ]},
    { question: "Question 4 - The answer is option 4?",
    answers: [
        {option: "Answer 1", answer: false},
        {option: "Answer 2", answer: false},
        {option: "Answer 3", answer: false},
        {option: "Answer 4", answer: true}
    ]},
    { question: "Question 5 - The answer is option 1?",
    answers: [
        {option: "Answer 1", answer: true},
        {option: "Answer 2", answer: false},
        {option: "Answer 3", answer: false},
        {option: "Answer 4", answer: false}
    ]}
]

console.log("hello");