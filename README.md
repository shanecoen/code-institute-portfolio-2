# Movie Quiz

Movie Quiz is a fun and interactive quiz that follows a multiple choice format. It allows the movie fan to test their knowledge of all things movies to see if they really know as much about movies as they think they do!!!

Some of its key features include:

* Easy to follow instructions are given,
* Multiple choice format questions,
* The movie fan will know instantly if they choose correct answer,
* Score is updated instantly,
* Next question appears automatically,
* Total score is given at end of quiz,
* The option to restart quiz is always available.

## The Website

<br>

![Image of website in various screen sizes](assets/images/readme-responsive-image.jpg)

<br>

This website is hosted by GitHub pages and can be viewed at: <br>
[Movie Quiz](https://shanecoen.github.io/code-institute-portfolio-2/index.html)

## **Contents**

## **The Design Process**

### UX Design:

It was designed using the 5 principles of UX Design (strategy, scope, structure, skeleton and surface) in order to develop a website that fully meets the user's needs.

### User Stories:

* As a movie fan I want to be able to understand the websites purpose instantly upon loading it.
* As a movie fan I want to view an aethetically pleasing website.
* As a movie fan I want to be able to play a fun and interactive quiz.
* As a movie fan I want its functionality to be clear from the outset.
* As a movie fan I want a challenging quiz.
* As a movie fan I want to be able to keep track of how many questions are in the quiz.
* As a movie fan I want to be able to keep track of my score as I progress.
* As a movie fan I want to be able to restart the quiz if desired.
* As a movie fan I do not wish to be presented with the same questions again if I restart quiz. I want questions randomized.

### Responsively Designed:

This website has been designed Mobile First as priority and huge importance has been put into this area to ensure that it functions responsively on all devices be it mobile, tablet and desktop screen sizes.

### Semantic HTML:

Wherever possible Semantic HTML5 elements were used in order to have the HTML code structured correctly and to enure that the code is accessible to all users.

### Wireframes:

Wireframes were an integral part of the design process for this website. They were used as a visual representation of the initial ideas for the architecture of the site i.e. the organisation of all pages and features etc. It was very important to be able to visualise how this website would look and function whether it was in Mobile, Tablet or Desktop view. Balsamiq was used in the production of wireframes for this website and it helped greatly in the development process when the decison had to be made as to what features etc were to be included. Some of the wireframes used can be seen in the image below and show desktop and mobile view side by side. (note: wireframe sizes are not to scale).

<br>

![Image of Balsamiq Wireframes used in designing website](assets/images/readme-wireframe.jpg)

### Site Structure:

The Movie Quiz consists of three seperate pages i.e. Home page, the Quiz page and the final results page. The home page is the default landing page and the quiz page can be assessed once the user clicks on the start quiz button. The final results page can only be assessed once the user has completed the quiz. At all times the user has the option of returning to the homepage via the large restart button making navigation very accessible.

### Design Choices:

* Typography

The font chosen for this website was "Raleway" for all headings and body text. The font has a fallback option of "Sans-Serif". This font was chosen as it is aesthetially pleasing and is easy to read for the user. Google Fonts was used to aquire this font.

* Colour Scheme

The colour scheme chosen for the website consists of navy (#000080) and beige (#f5f5dc). These were chosen as they have a good contrast with one another and make viewing and interacting very accessible for the user.

<br>

[Back To Contents](<#contents>)

### Existing Features:

#### Common To All Pages:

* Large Call To Action Buttons

These Call To Action Buttons can be found on each page. They are large in size and easily recognisible to the user that they are to be clicked and
are used to easily navigate between different sections if desired. They are a quick way for the user to either begin the quiz or restart quiz and return to the homepage. They are bright in colour and when hovered over they change background and font colour.

<br>

![Image of Call To Action Button from website](assets/images/readme-button.jpg)

#### Quiz Rules:

This can be found on the main quiz hompage and can be viewed instanstly upon loading. It gives the user a quick rundown of how the quiz functions and what the user can expect once they begin the quiz.

<br>

![Image of Quiz Rules section from website homepage](assets/images/readme-rules.jpg)

#### Quiz Question:

Once the user begins the quiz by pressing the start button they will instantly be presented with the first question. It is based at the very top of each question page and must be read before then proceeding to the answer options. The user will be presented with 5 questions in total which are selected ramdonly the list of available questions.

<br>

![Image of Quiz question](assets/images/readme-question.jpg)

#### Quiz Number:

Directly below each question is listed the quiz question number. This number is updated automatically (ie. question 1 of 5, question 2 of 5 etc) depending on how far the user has progressed into the quiz until the fifth and final question has been asked.

<br>

![Image of Quiz question number](assets/images/readme-question-number.jpg)

#### Quiz Answer Option Buttons:

Once the user is presented with a quiz question the will also see four large answer buttons in front of them. These questions are multiple choice and only one answer is correct. They must chhose one answer to proceed to the next question. If they choose the correct answer the button will trun green and the font will also change colour. An incorrect answer will turn red. After choosing an answer the next question will then automatically be presented. A delay of 1.5 seconds is allowed to give the user ample time to process if they choose the correct answer.

<br>

![Image of Quiz answer option buttons](assets/images/readme-answer-option.jpg)

#### Current Score:

Directly below the quiz answer options is listed the users current score. Every time a correct answer is given this score will increase by one. At the beginning of the quiz this number will be blank and will stay blank until a correct score is given (blank = score 0). If a user answers a correct question the answer option will turn green, the current score will be increased by one and then the next question will be presented after a delay of 1.5 seconds.

<br>

![Image of Quiz current score](assets/images/readme-your-score.jpg)

#### Final Page And Final Score:

Once the user has answered their fifth and final question they will then be taken automatically to the final page. This page lists a message of congratulations to the user for completing the quiz and they are presented with their final score. This score will reflect how many correct answers the user gave during the quiz. They are then presented with an option of restarting the quiz and can try to beat the score they received.

<br>

![Image of Quiz final page and final score](assets/images/readme-final-page.jpg)

### Future Features:

* Expand on the list of questions that is available to the user. At present there are only 10 questions available and a much bigger list would make it less likely than they would receive the same question when they attempt the quiz for a second or third time.

* Make use of progress bar. At present the user can view their progress via text (ie question 2 of 5) but using a progress bar as either and addition or an alternative but make for a more pleasant experience.

* Incorporate a timer into the quiz questions thus making it more challenging for the user. Allowing them only 10 seconds etc to select an answer would make it much more rewarding once the correct answer is chosen.

* Make use of images and/ or videos in the questions. This could be either as part of the questions themselves or showing a video or image from the movie once the correct answer has been chosen again making for a much more pleasant experience.

* Allow the users to create a username and have a login section. This would allow the user to create an account when they play the quiz for the first time and then they would log in every time they return where their previous scores etc could be viewed.

* Incorporate a highest scores section. Once the user logs in and plays the quiz their score would registered and a top scorers list would be kept of all players. Having such a section make help create a lot of returning users as they try to get top spot on the list and mnake for a much more enjoyable experience.

* Create a contact section to allow for user feedback and this could also incorporate social media contacts etc.

<br>

[Back To Contents](<#contents>)

## **Technologies Used**

* [Balsamiq](https://balsamiq.com/)  - Used in the design process for the production of wireframes.
* [HTML5](https://html.spec.whatwg.org/) - Used to provide the website's structure.
* [CSS3](https://www.w3.org/) - Used to provide the website's styling.
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Used to provide the website's interactivity.
* [Github](https://github.com/) - This was used to host and deploy the website.
* [Gitpod](https://www.gitpod.io/) - Provided the developement environment for the website.

<br>

[Back To Contents](<#contents>)

## **Testing**

### Code Validation:

* The code from this website has been validated using the [W3C HTML Validator](https://validator.w3.org/) to ensure that it complies with the standards set by the W3 Consortium.
* All three pages (index.html, quiz.html and final.html) have been tested and all have come back 100% clear of errors. Quiz.html and final.html shows a warning regarding an empty heading but this is left empty to allow the JavaScript code to run correctly on both pages.
* The CSS code has been validated using the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) to ensure that its complies with all relevant standards and it has come back 100% clear of all errors and warnings.
* The JavaScript code has been validated using [JSHint](https://jshint.com/) and has come back clear of errors but some warnings are present.
* The Images below show the HTML validation results (top - no errors on all three pages) and CSS validation results (bottom).

<br>

![Image of HTML and CSS Validation result](assets/images/readme-code-validation.jpg)

### Website Responsiveness:

This website has been tested at every single stage to ensure that is responded correctly to every device type and size i.e. desktop, tablet and mobile. Some of the device types used for testing included; lenovo IdeaPad 100 Laptop, Samsung Galaxy 7 inch tablet, Amazon Fire 6 inch tablet, Apple iPad 9.7 inch and a number of mobile phone brands such as Apple iPhone, Samsung and Huawei. Google Chrome DevTools and Firefox's responsive design mode were used extensivelly in these tests. Media queries were used in this websites design where required to ensure that every aspect responded as desired with regard to rendering, layout, positioning etc. All responsiveness testing passed successfully.

### Browser Compatability:

This website was tested extensivelly using a number of different browsers (i.e. Google Chrome, Mozilla Firefox and Microsoft Edge) throughout its development. This was done to ensure that every aspect of the websites design, appearance, functionality and responsivness was compatible with these browsers.
Note: Safari was not available to the developer during this browser compatability testing.

### Testing User Stories:

### Lighthouse Testing:

While testing this website, good use was made of Chrome Dev Tools. One feature that was used extensivelly was [Lighthouse](https://developers.google.com/web/tools/lighthouse). This is a tool that is used to identify and fix common problems that can affect the sites performance, accessibility and user experience. It can generate a report (on both mobile and desktop devices) and give a score out of 100 on website performance (site loading performance), Accessibility, Best practices (does it conform to industry best practices) and SEO (is the site optimised for search engine result rankings). This was a very useful tool that helped to identify and resolve any bugs present from an early stage. The below image shows some of this websites current lighthouse scores with the left side showing quiz.html on a mobile device and the right side showing it on a desktop screen.

<br>

![Image of lighthouse testing result](assets/images/readme-lighthouse.jpg)

### Known Bugs:

* Resolved Bugs

* Unresolved Bugs

<br>

[Back To Contents](<#contents>)

## **Deployment**

### GitHub Pages:

This website was deployed using GitHub pages and it can be viewed at:<br> 
https://shanecoen.github.io/code-institute-portfolio-2/index.html

In order to deploy this website a number of steps had to be undertaken;

1. Naviagte to [GitHub](https://www.github.com)
2. Login into your Github account with your username and password
3. Navigate to the "your repositories" section
4. Select the project to be deployed
5. Select "settings" from the options along the top menu
6. Once in settings a new menu wil appear on the left hand side. Select the "pages" option. 
You will now be in the Github pages section where you can deploy your project. This page can
be seen in the image below.

<br>

![Image of Github pages section](assets/images/readme-github-one.jpg)

<br>

7. In order to now deploy your website select either "master" or "main" in the "Source: Branch" option and click "save".
8. Github will then refesh the page and give details of the newly deployed project.

### To Fork A Repository On GitHub:

A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project. In order to fork this repository follow the steps below;

1. Log into your GitHub account and locate the repository your wish to fork.
2. On the top right corner of the repository page locate the "Fork" option.
3. Click this button and a copy of the original repository will now be created in your GitHub account.

### Creating A Local Clone of Website Files From GitHub:

1. Log into your GitHub account and locate the repository you wish to clone.
2. When in the repository, click on the "code" tab.
3. When the menu opens; select HTTPS and copy the link on right side.
4. Naviagte to an IDE and open GIT bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type "git clone"
7. Paste the URL of the code you have copied from GitHub,
8. Press enter and your local clone will have been created.

<br>

[Back To Contents](<#contents>)

