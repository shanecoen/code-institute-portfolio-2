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
        question: "Who directed Titanic, Avatar and The Terminator?",
        answer1: "James Cameron",
        answer2: "Steven Spielberg",
        answer3: "Peter Jackson",
        answer4: "Michael Bay",
        answer: 1
    },

    {
        question: "Name the 2015 film spinoff to the Rocky series starring Michael B. Jordan.",
        answer1: "Adrian",
        answer2: "Creed",
        answer3: "Apollo",
        answer4: "Drago",
        answer: 2
    },

    {
        question: "Who played the lead role in the 2001 film Lara Croft: Tomb Raider?",
        answer1: "Alicia Vikander",
        answer2: "Emma Stone",
        answer3: "Halle Berry",
        answer4: "Angelina Jolie",
        answer: 4
    },
     
    {
        question: "In The Matrix, what colour pill does Neo?",
        answer1: "Yellow",
        answer2: "Green",
        answer3: "Red",
        answer4: "Blue",
        answer: 3
    },

    {
        question: "Which US comedian wrote and directed Get Out and Us?",
        answer1: "Jordan Peele",
        answer2: "Chris Rock",
        answer3: "Judd Apatow",
        answer4: "Ben Stiller",
        answer: 1
    },

    {
        question: "How many Academy Awards has Leonardo DiCaprio won?",
        answer1: "One",
        answer2: "Two",
        answer3: "Three",
        answer4: "None",
        answer: 1
    },

    {
        question: "How many films have Al Pacino and Robert De Niro starred in together?",
        answer1: "Three",
        answer2: "Five",
        answer3: "Four",
        answer4: "Six",
        answer: 3
    },

    {
        question: "Where were The Lord of the Rings movies filmed?",
        answer1: "Ireland",
        answer2: "Iceland",
        answer3: "Australia",
        answer4: "New Zealand",
        answer: 4
    },

    {
        question: "Which actor hasnt played the Joker?",
        answer1: "Jack Nicholson",
        answer2: "Sean Penn",
        answer3: "Jared Leto",
        answer4: "Mark Hamil",
        answer: 2
    },

    {
        question: "What Hollywood movie star plays himself in Zombieland?",
        answer1: "Tom Cruise",
        answer2: "Will Smith",
        answer3: "Bill Murray",
        answer4: "Brad Pitt",
        answer: 3
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
        localStorage.setItem('playerScore', score);
        // Go To The Final Page
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
