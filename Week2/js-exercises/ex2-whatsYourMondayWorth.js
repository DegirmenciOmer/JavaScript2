/**
 
 ** Exercise 2: What 's your Monday worth? **
 
 Write a function that finds out what your hourly rate on a Monday would be
 Use the map array function to take out the duration time for each task.
 Avoid using for loop or forEach.
 Multiply each duration by a per - hour rate for billing and sum it all up.
 Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
 Make sure the function can be used on any array of objects that contain a 
 duration property with a number value

 */




const mondayTasks = [{
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

function dayWorth(tasks, hourlyRate) {
  
// put your code in here, the function does returns a euro formatted string
let sumDurations = 0;

const durations = tasks.map(hourly => {
  return sumDurations += hourly.duration;
});
output = sumDurations / 60 * hourlyRate;
//return a € formatted string
return '€' + output.toFixed(2);
};

console.log(dayWorth(mondayTasks, 25))
console.log(dayWorth(mondayTasks, 13.37))



// Write a JavaScript function to merge two arrays and remove all duplicated elements.

// Test data:
// const array1 = [1, 2, 3];
// const array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]


