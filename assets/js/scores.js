const SCORE_STORAGE_KEY = "score";
 
 function listScores() {
    const segment = document.querySelector(".storage");
    var storedText = localStorage.getItem(SCORE_STORAGE_KEY);
    var storedScores = JSON.parse(storedText);
    var lineText = '';
    var scores = storedScores.list;
    for (var i = 0; i < scores.length; i++) {
      var initial = scores[i].initials;
      var score = scores[i].score;
      lineText += "<p><span>" + initial +  "</span><span>" + score + "</span></p>";
    }
    segment.innerHTML = lineText;
 }

 segment = document.querySelector(".back-button");
 segment.addEventListener('click', saveScore);