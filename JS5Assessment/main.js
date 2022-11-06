import Person from "./Person.js";
/*
  Here you will write your the functionality for your webpage

  I have already written the import and export statements for the Person class, so once you have it written in the other file it should be available here
*/

// creates variable for form
let form = document.querySelector('#inputForm');


 //creates variables for for elements
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const age = document.querySelector('#age');
const greeting = document.querySelector('#greeting');
const btn = document.getElementById('btn');

//prevents the page from default changing after submitting
form.addEventListener('submit', function (event) {
 event.preventDefault();
})




//creates instance of new class after clicking on button with form values displayed
let addData = document.querySelector('#btn').addEventListener('click', function() {
  let person = new Person(firstName, lastName, age);
  const newP = document.createElement('p')
  newP.innerText = `Hello ${firstName.value} ${lastName.value}! You are ${age.value} years old.`
  greeting.append(newP)
})



