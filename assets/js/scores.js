const SCORE_STORAGE_KEY = "score";
var storedScores;
 
 function listScores() {
    const segment = document.querySelector(".storage");
    loadScores();
    var lineText = '';
    var scores = storedScores.list;
    for (var i = 0; i < scores.length; i++) {
      var initial = scores[i].initials;
      var score = scores[i].score;
      lineText += "<p><span>" + initial +  "</span><span>" + score + "</span></p>";
    }
    if (scores.length === 0) {
        lineText += "<p><span class='empty-scores'>No high scores to display</span></p>";
    }
    segment.innerHTML = lineText;
 }

 function goBack() {
     window.location = "index.html";
 }

 function clearScores() {
   loadScores();
   storedScores.list = [];
   saveScores();
   listScores();
 }

 function loadScores() {
    var storedText = localStorage.getItem(SCORE_STORAGE_KEY);
    storedScores = JSON.parse(storedText);
 }


 function saveScores() {
    localStorage.setItem(SCORE_STORAGE_KEY, JSON.stringify(storedScores));
 }

 segment = document.querySelector("#back-button");
 segment.addEventListener('click', goBack);

 segment = document.querySelector("#clear-scores");
 segment.addEventListener('click', clearScores);