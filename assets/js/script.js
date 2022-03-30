const question = document.getElementById("question-title");
const options = Array.from(document.getElementsByClassName("answer"));

let currentQuestion = {};
let acceptingAnswers = false;
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

// Constants
const correctBonus = 1;
const maxQuestions = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getQuestion();
};

getQuestion = () => {

    questionCounter++;
    const questionNumber = Math.floor(Math.random() * 5);
    currentQuestion = availableQuestions[questionNumber];
    question.innerText = currentQuestion.question;

    options.forEach( answer => {
        const number = answer.dataset['number'];
        answer.innerText = currentQuestion['answer' + number];
  });

  availableQuestions.splice(questionNumber, 1);
  acceptingAnswers = true;
};

startGame();
