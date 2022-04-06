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

/* jshint esversion: 6 */

/* Declaring Constants For Final Score 
To Be Shown On Final Page */
const finalScore = document.getElementById('finalscore');
// Get Final Score From Local Storage
const playerScore = localStorage.getItem('playerScore');

// Final Score To Be Shown After 5 Questions Answered
finalScore.innerText = playerScore;