function stopwatch() {
    console.log('stopwatch has started...');
    let timerStarted = false; // click start, this flips to true, click stop, false
    let timer = null;
    let time = document.getElementById('time');
    let btnStart = document.getElementById('startBtn');
    let btnStop = document.getElementById('stopBtn');
    //console.log(time,btnStart,btnStop);
    let [seconds, minutes] = [01,00];

    btnStart.addEventListener('click', startTimer);
    btnStop.addEventListener('click', stopTimer);
   
    function startTimer() {
      timer = setInterval(myTimer, 1000);
      btnStart.disabled = true;
      btnStop.disabled = false;
    }

    function stopTimer() {
      clearInterval(timer);
      time.textContent = "00:00";
      seconds = 0;
      minutes = 0;
      btnStart.disabled = false;
      btnStop.disabled = true;
    }

    function myTimer() {
      timerStarted = true;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      time.textContent = `${ minutes < 10 ? `0` + minutes : minutes}:${seconds < 10 ? `0` + seconds : seconds}`;
      seconds++
    }
    
}