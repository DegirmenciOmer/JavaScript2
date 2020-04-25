/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the
   play button it starts counting down!If the user wants to pause the timer,
   they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */

let s = 5;//document.querySelector('.form-example');
let m = 1; //document.querySelector('#min');
let timer;
const stopWatch = document.querySelector('.stopwatch');

function start() {
  if (!timer){
  timer = setInterval(run, 1000);
  }
}

function run() {
  m = Math.floor(s / 60);
  stopWatch.textContent = m + ':' + s;
  s--;
  if(s < 0 && m < 0) {
    clearInterval(timer);
    stopWatch.textContent = "Time\'s up!"
  }

} 

function pause() {
  clearInterval(timer);
  timer = false;
}


