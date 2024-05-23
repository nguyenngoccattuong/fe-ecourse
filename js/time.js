
// Uncheck all radio button
$(document).ready(function () {
  // Uncheck all radio buttons when the page loads
  $("input[name='answer']").prop('checked', false);
});

var resultUrl = 'Result';

// Timer
var countdownTime = 0;
function updateCountdown() {
  var hours = Math.floor(countdownTime / 3600);
  var minutes = Math.floor((countdownTime % 3600) / 60);
  var seconds = countdownTime % 60;

  var formattedHours = hours.toString().padStart(2, '0');
  var formattedMinutes = minutes.toString().padStart(2, '0');
  var formattedSeconds = seconds.toString().padStart(2, '0');

  document.getElementById('countdown').textContent = formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;

  countdownTime--;

  if (countdownTime < 0) {
      clearInterval(interval);
      submitAnswers('/Exam/SubmitAnswers');
  }
}

function setTime(hour, minute, second) {
  countdownTime = (hour * 3600) + (minute * 60) + second;
}

var interval = setInterval(updateCountdown, 1000);