/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/



let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();

/*when this code is run, it will pop up an alert number 12. Because x is a function 
which reassigns the value of a to 12. and it returns this variable in a closure as an alert.