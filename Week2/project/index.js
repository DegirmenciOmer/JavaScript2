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

let s = 0;
let m; 
let timer;
const pomodoro = document.querySelector('.pomodoro');
function minuteInput() {
  const minInput = document.querySelector("#setMin");
  m = parseInt(minInput.minutes.value);
  document.getElementById("demo").innerHTML = "Your pomodoro is set up to " + m + " minutes";

}

function start() {
  if (!timer){
  timer = setInterval(run, 1000);
  }
}

function run() {  
  pomodoro.textContent = m + ':' + s;
  s--;
  if(s < 0) {
    if(m == 0) {
      clearInterval(timer);
      pomodoro.textContent = "Time\'s up!"
    }
    m--;
    s = 59;    
  }
  //  If the timer is running, the user can 't change the session length anymore
  if(timer){
    minuteInput = false;
  }
}
//pause the timer
function pause() {
  clearInterval(timer);
  timer = false;
}


