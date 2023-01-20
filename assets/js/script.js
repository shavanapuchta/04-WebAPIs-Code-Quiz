var timerEl = document.getElementById('countdown');

function countdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
          timerEl.textContent = 'Time: ' + timeLeft;
          timeLeft--;
        } else if (timeLeft === 1) {
          timerEl.textContent = 'Time: ' + timeLeft;
          timeLeft--;
        } else {
          timerEl.textContent = 'Game Over';
          clearInterval(timeInterval);
          displayMessage();
        }
      }, 1000);
    }

countdown();



(function() {
    var sec = 75;
    function startTimer(){
        console.log('timer suppose to go')
        var timer = setInterval(function(){
            sec--;
            document.getElementById('timerDisplay').innerHTML='00:'+sec;
            if (sec < 0) {
                clearInterval(timer);
                alert("Game Over!")
            }
        }, 1000);
    }
    document.getElementById('incorrect').addEventListener('click', function() {
        sec -= 10;
        document.getElementById('timerDisplay').innerHTML='00:'+sec;
    });
    startTimer();
})();

