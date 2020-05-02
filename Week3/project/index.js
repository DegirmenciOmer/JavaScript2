// Your code goes in here
const costInput = document.querySelector('#cost');
const serviceInput = document.querySelector('.service');
const peopleInput = document.querySelector('#people');
const button = document.querySelector('button');
const output = document.querySelector('.output');

function calculateTip () { //inspired by https://www.youtube.com/watch?v=eJIHT0cENR0
 let cost = parseInt(costInput.value);
 let service = parseInt(serviceInput.value) / 100;
 let people = parseInt(peopleInput.value);
 let tip = (cost * service) / people;
 
 if(!cost || !service || !people ){
         return alert('Invalid number!')
     }
//  else if(!cost || !service || !people){
//     return alert('Invalid number!')

//  else if(cost || service || people ===  null){
//      return alert('Please fill in all the fields!')
//  }
if (people > 1) {
    return output.textContent = '€' + tip.toFixed(2) + ' each';
}
return  output.textContent = '€' + tip.toFixed(2) ;
}