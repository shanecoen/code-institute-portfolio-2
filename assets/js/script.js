const question = document.getElementById("question-title");
const options = Array.from(document.getElementsByClassName("answer"));
const questionNum = document.getElementById("q-num");
const yourScore = document.getElementById("total-score");

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
        answer: 1
    },

    {
        question: "What is the capital of Italy?",
        answer1: "Dublin",
        answer2: "Rome",
        answer3: "Paris",
        answer4: "Madrid",
        answer: 2
    },

    {
        question: "What is the capital of Spain?",
        answer1: "Dublin",
        answer2: "Rome",
        answer3: "Paris",
        answer4: "Madrid",
        answer: 4
    },
     
    {
        question: "What is the capital of France?",
        answer1: "Dublin",
        answer2: "Rome",
        answer3: "Paris",
        answer4: "Madrid",
        answer: 3
    },

    {
        question: "What is the capital of Portugal?",
        answer1: "Lisbon",
        answer2: "Rome",
        answer3: "Paris",
        answer4: "Madrid",
        answer: 1
    }
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

    if (availableQuestions.length === 0 || questionCounter >= maxQuestions){
        // Go To The End Page
        return window.location.assign("/final.html");
    } 

    questionCounter++;
    questionNum.innerText = `Question: ${questionCounter} Of ${maxQuestions}`


    const questionNumber = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionNumber];
    question.innerText = currentQuestion.question;

    options.forEach( answer => {
        const number = answer.dataset['number'];
        answer.innerText = currentQuestion['answer' + number];
  });

  availableQuestions.splice(questionNumber, 1);
  acceptingAnswers = true;
};

options.forEach(answer => {
  answer.addEventListener("click", e => {
    if(!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedOption = e.target;
    const selectedAnswer = selectedOption.dataset["number"];

    const classToApply = 
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

      if (classToApply === "correct") {
          incrementScore(correctBonus);
      }

    selectedOption.parentElement.classList.add(classToApply);

    setTimeout( () => {
        selectedOption.parentElement.classList.remove(classToApply);
        getQuestion();
    }, 1000);   

    
  });
});

incrementScore = num => {
    score += num;
    yourScore.innerText = `Your Score: ${score}`;
};

startGame();
