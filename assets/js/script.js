// var body = window.body;
// var containerEl = document.createElement('div');
// var quizDiv = document.createElement('div');
// var resultDiv = document.createElement('div');
// var submitDiv = document.createElement('div');


// var containerHeading = document.createElement('h1');
// var containerPara = document.createElement('p');
// var timerEl = document.createElement('button');

// containerHeading.textContent ='Code Quiz';
// containerPara.textContent ='Welcome to the code quiz. Each question is timed';
//timerEl.textContent('')

// containerEl.appendChild(containerHeading);
// //body.appendChild(containerEl);
// containerEl.appendChild(containerPara);
// body.appendChild(containerEl);

// containerEl.setAttribute('style', 'background-color: blue;');
// body.appendChild(containerEl);

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

   },
   {
    question: 'Inside which HTML element do we put the JavaScript types?',
    choices: {

         A: '<script>',
         B: '<head>',
         C: '<meta>',
         D: '<style>'
    },
    answer: 'A',
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
   },
   

]

const buttonEl = document.getElementById('startBtn');
buttonEl.addEventListener('click', function(){
   const quizStartEl = document.getElementById('quizStart');
   quizStartEl.setAttribute('style','display: none;');


})

// Timer function
let timer = 60;

// Question function

// Result function  ---- localStorage

var studentGrade = {
    student: student.value,
    grade: grade.value,
    comment: comment.value.trim()
  };
  
  localStorage.setItem("Initials", document.querySelector(".resultForm").textContent ) ;
  
  localStorage.setItem("Highscore",   document.querySelector(".resultForm").textContent ) ;
  renderMessage();
  
  });
  
  function showResult() {
    var quizQuestions = JSON.parse(localStorage.getItem("questions"));
    if (questions !== null) {
      document.querySelector(".resultForm").textContent =  + 
      " received a/an " + lastGrade.grade
    }
  }
  