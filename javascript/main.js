function myButton(event) {
    event.preventDefault()


var year = document.getElementById('year').value;
var month = parseInt(document.getElementById('month').value);
var date = parseInt(document.getElementById('date').value);
var gender = document.querySelector('input[name = gender] : checked').value;

let cc = year.substring(0, 2);
let yy = year.substring(2, 3);
let mm = month;
let dd = date;

let dayOfTHeWeek =  ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )% 7;

let maleAkanName = ['Kwasi', 'Kwadwo', 'Kwabena','Kwaku', 'Yaw', 'Kofi', 'Kwame'];
let femaleAkanName = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
}