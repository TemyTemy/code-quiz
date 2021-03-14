var questions = [
   {
       question: 'Which of the following is not JavaScript Data Types?',
       choices: {

            A: 'Undefined',
            B: 'Number',
            C: 'Boolean',
            D: 'Float'
       },
       answer: 'D',
       id: '1'
   },
   {
    question: 'Inside which HTML element do we put the JavaScript types?',
    choices: {

         A: '&lt;script&gt;',
         B: '&lt;head&gt;',
         C: '&lt;meta&gt;',
         D: '&lt;style&gt;'
    },
    answer: 'A',
    id: '2'
   },
   {
    question: 'A set of unordered properties that, has a name and value is called______',
    choices: {

         A: 'String',
         B: 'Array',
         C: 'Undefined',
         D: 'Object'
    },
    answer: 'D',
    id: '3'
   },
   {
    question: 'The execution of a function stops when the program control encounters the _________ statement in the body of the function.',
    choices: {

         A: 'return',
         B: 'continue',
         C: 'break',
         D: 'goto'
    },
    answer: 'A',
    id: '4'
   },
   {
    question: 'Which of the following function of Array object applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value?',
    choices: {

         A: 'pop()',
         B: 'push()',
         C: 'shift()',
         D: 'reduceRight()'
    },
    answer: 'D',
    id: '5'
   }
];

var storedScores = undefined;
const EMPTY_SCORES = {
  list: []
};

var questionsAsked = [];
var correctlyAnswered = [];

const TOTAL_TIME_ALLOWED = 60;
const WRONG_VALUE_TIME_PENALTY = 10;
const SCORE_STORAGE_KEY = "score";

var timeLeftToCompleteQuestions;
var timerFunction;

const buttonEl = document.getElementById('startBtn');
buttonEl.addEventListener('click', doStartQuiz);

 function doStartQuiz() {
   hideIntroPart();
   showQuestionsPart();
   timeLeftToCompleteQuestions = TOTAL_TIME_ALLOWED;
   throwQuestionsAtUser();
   doTiming();
   var storedText = localStorage.getItem("score");
   if (!storedText) {
    storedScores = EMPTY_SCORES;
   } else {
    storedScores = JSON.parse(storedText);
   }

 }

 function hideIntroPart() {
  var intro = document.querySelector(".intro");
  intro.style.display = "none";
 }

 function showQuestionsPart() {
  var qpart = document.querySelector(".question-part");
  qpart.style.display = "flex";
 }

 function throwQuestionsAtUser() {
  const rdx = Math.random() * 5;
  var idx = Math.floor(rdx);
  const currentQuestion = questions[idx];
  if (questionsAsked.find((x) => x.id === currentQuestion.id)) {
    throwQuestionsAtUser();
  } else {
    doOneQuestion(currentQuestion);
  } 
 }

 function showAnswersPart(text) {
  var qpart = document.querySelector(".answer-part");
  qpart.style.display = "flex";
  qpart.innerHTML = "<p>" + text + "</p>";
 }

 function hideAnswerPart() {
  var qpart = document.querySelector(".answer-part");
  qpart.style.display = "none";
  qpart.innerHTML = "<p></p>";
 }

 function doOneQuestion(questionItem) {
    var questionText = "<h1>" + questionItem.question + "</h1>";
    var qpart = document.querySelector(".question-part");
    for (key in questionItem.choices) {
      var choice = questionItem.choices[key];
      var choiceText = "<p class='choice-line'><a class='choice' onclick='recordAnswerChoice(event)' data-choice=" + key + "  data-question=" + questionItem.id + ">" + key + ':&nbsp;&nbsp; ' + choice + "</a></p>";
      questionText += choiceText;
    }
    qpart.innerHTML = questionText;
    questionsAsked.push(questionItem);
    hideAnswerPart();
 }

 function recordAnswerChoice(evt) {
    const questionId = evt.target.dataset.question;
    const choice = evt.target.dataset.choice;

    var questValue = questions.find((q) => q.id === questionId);
    var responseText = "<span class='wrong-answer'>Wrong!</span>";
    if (questValue && questValue.answer === choice) {
        responseText = "<span class='right-answer'>Correct!</span>";
        correctlyAnswered.push(questValue);
    } else {
       timeLeftToCompleteQuestions -= WRONG_VALUE_TIME_PENALTY;
    }

    showAnswersPart(responseText);
    if (questionsAsked.length < questions.length) {
      throwQuestionsAtUser();
    } else {      
      timeLeftToCompleteQuestions = 0;
      showScoreSummary();
    }

 }

 function showScoreSummary() {
  clearTimeout(timerFunction); 
  updateTimerText();
  var segment = document.querySelector(".score");
  segment.innerHTML = correctlyAnswered.length;

  segment = document.querySelector(".results-part");
  segment.style.display = "flex";
  segment = document.querySelector(".answer-part");
  segment.style.display = "none";
  segment = document.querySelector(".question-part");
  segment.style.display = "none";

  segment = document.querySelector(".submit-button");
  segment.addEventListener('click', saveScore);
 }

 function saveScore() {
  const initials = document.querySelector("#initials-input");
  const initText = initials.value;
  if (!initText || initText.trim() === "") {
      alert("Please enter your initials");
      return;
  } else {
    storeSummaryInLocalStorage(initText);
    window.location = "highscores.html"
  }
 }

 function doTiming() {
 
  updateTimerText();
  if (timeLeftToCompleteQuestions === 0) {
    showScoreSummary();     
  } else {
    timerFunction = setTimeout(updateTimer,  1000);    
  }
 }

 function updateTimer() {
   timeLeftToCompleteQuestions--;
   doTiming();   
 }

 function updateTimerText() {
  const timer = document.querySelector(".timer");
  timer.textContent = timeLeftToCompleteQuestions;
 }

 function storeSummaryInLocalStorage(initialText) {
    const scoreLine = {
      initials: initialText,
      score:  correctlyAnswered.length
    };
    storedScores.list.push(scoreLine);
    localStorage.setItem(SCORE_STORAGE_KEY, JSON.stringify(storedScores));
 }

 function listScores() {
    const segment = document.querySelector(".storage");
    var storedScores = localStorage.getItem(SCORE_STORAGE_KEY);
    var lineText = '';
    var scores = storedScores.list;
    for (var i = 0; i < scores.length; i++) {
      var initial = scores[i].initials;
      var score = scores[i].score;
      lineText += "<p><span>" + initial +  "</span><span>" + score + "</span></p>";
    }
    segment.innerHTML = lineText;
 }
