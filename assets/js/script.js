/**
 * The Following Tutorials On How To Build A JavaScript Quiz 
 * Were used as Inspiration for my code and edited to
 * suit my requirements:
 * 
 * Title:How To Create A Simple JavaScript Quiz
 * Author: Unknown
 * Date: 2021
 * Url: https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/
 * 
 * Title: Build A Quiz App With HTML, CSS and JavaScript
 * Author: James Q Quick
 * Date: 2019
 * Url: https://www.youtube.com/watch?v=u98ROZjBWy8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=1
 * 
 * Title: How To Create A JavaScript Quiz Code
 * Author: Unknown
 * Date: 2020
 * Url: https://www.codingninjas.com/blog/2020/11/03/how-to-create-a-quiz-in-javascript/
*/

// Declaring Constants And Variables
const question = document.getElementById("question-title");
const options = Array.from(document.getElementsByClassName("answer"));
const questionNum = document.getElementById("q-num");
const yourScore = document.getElementById("total-score");

let currentQ = {};
let acceptAns = false;
let score = 0;
let qCounter = 0;
let availableQ = [];

// 10 Quiz Questions. 5 Max To Be Selected At Random For Quiz.
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
        question: "In The Matrix, what colour pill does Neo Take?",
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

/* Declaring Constants For Player Score 
And Number Of Max Questions To Be Asked */
const correctB = 1;
const maxQ = 5;

// Function To Begin Quiz
startGame = () => {
    qCounter = 0;
    score = 0;
    // Takes All Questions For Questions Array
    availableQ = [...questions];
    console.log(availableQ);
    getQuestion();
};

// Function To Get Next Question In Quiz
getQuestion = () => {

    if (availableQ.length === 0 || qCounter >= maxQ){
        // Player Score Saved In Local Storage At End Game
        localStorage.setItem('playerScore', score);
        // Go To The Final Page And Show Final Player Score
        return window.location.assign("final.html");
    }

    // Show Current Question Number (eg Question 1 Of 5)
    qCounter++;
    questionNum.innerText = `Question: ${qCounter} Of ${maxQ}`;

    // Randomize Quiz Questions
    const questionNumber = Math.floor(Math.random() * availableQ.length);
    currentQ = availableQ[questionNumber];
    question.innerText = currentQ.question;

    // To Get Appropriate Answer For Each Question
    options.forEach( answer => {
        const number = answer.dataset['number'];
        answer.innerText = currentQ['answer' + number];
  });

  // Takes Questions Array And Stops Same Question Being Repeated
  availableQ.splice(questionNumber, 1);
  acceptAns = true;
};

// References Clicked Answer For Each Question
options.forEach(answer => {
  answer.addEventListener("click", event => {
    if(!acceptAns) return;

    acceptAns = false;
    const selectedOption = event.target;
    const selectedAnswer = selectedOption.dataset["number"];

    // Apply Correct Or Incorrect Class Depending On Answer
    const ApplyAfterAnswer = 
      selectedAnswer == currentQ.answer ? "correct" : "incorrect";
    
      // Increment Score By Appropriate Amount If Correct
      if (ApplyAfterAnswer === "correct") {
          incrementScore(correctB);
      }

    selectedOption.parentElement.classList.add(ApplyAfterAnswer);
    
    /* Removing above class and also Allowing 1.5 Seconds
    after Selection Before Next Question */
    setTimeout( () => {
        selectedOption.parentElement.classList.remove(ApplyAfterAnswer);
        getQuestion();
    }, 1500); 

  });
});

// Increment Score To Be Shown After Each Question
incrementScore = num => {
    score += num;
    yourScore.innerText = `Your Score: ${score}`;
};

// Calling Function To Begin Quiz
startGame();