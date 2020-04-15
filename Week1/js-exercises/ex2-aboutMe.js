const body = document.querySelector('body')

// 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
body.style.fontFamily = "Arial, sans-serif";

 // 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
const nickName = document.querySelector('#nickname');
nickName.textContent = "Eddy";
const favFood = document.querySelector('#fav-food');
favFood.textContent = "Kebab";

const homeTown = document.querySelector('#hometown');
homeTown.textContent = "Small Ville";

// 4. Iterate through each li and change the class to "list-item".
const li = document.querySelectorAll('li');
for (let i = 0; i < li.length; i++) {
	li[i].className = "list-item";
}


//6. Create a new img element and set its src attribute to a picture of you.
//Append that element to the page.
const myImg = document.createElement("img");
myImg.setAttribute("src", "https://i.ibb.co/r0kyNH0/Knipsel.png");
myImg.setAttribute("alt", "myImg");
myImg.setAttribute("width", "150px");
document.body.appendChild( myImg );


// const li = document.getElementsByTagName('li');

// document.li.appendChild( myImg );  ?????????????








/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */