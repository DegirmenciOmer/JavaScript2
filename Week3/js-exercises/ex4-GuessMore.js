/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);//10
// val takes the value of x and because x is used as an
//argumentin this function, it gives the output as 10. 
console.log(x); // 9
//because x is a global variable. it has nothing to do with f1 function.







const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y); // {x: 10}
// since y is used as an argument, x property gets its new value as 10.
console.log(y); //{x: 9}
//here x property still has the value of 9 since it is logged as a global variable
//which has no relationship with any block element.