function myButton(event) {
    event.preventDefault()
}

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

if(gender==='male' && dayOfTheWeek===1) {
    alert('Your Akan name is ' + maleAkanName['0'])
  }else if(gender==='male' && dayOfTheWeek===2) {
    alert('Your Akan name is ' + maleAkanName['1'])
  }if(gender==='male' && dayOfTheWeek===3) {
    alert('Your Akan name is ' + maleAkanName['2'])
  }if(gender==='male' && dayOfTheWeek===4) {
    alert('Your Akan name is ' + maleAkanName['3'])
  }if(gender==='male' && dayOfTheWeek===5) {
    alert('Your Akan name is ' + maleAkanName['4'])
  }if(gender==='male' && dayOfTheWeek===6) {
    alert('Your Akan name is ' + maleAkanName['5'])
  }if(gender==='male' && dayOfTheWeek===7) {
    alert('Your Akan name is ' + maleAkanName['6'])
  }

if(gender==='female' && dayOfTheWeek===1) {
    alert('Your Akan name is ' + femaleAkanName['0'])
  }else if(gender==='female' && dayOfTheWeek==2) {
    alert('Your Akan name is ' + femaleAkanName['1'])
  }else if(gender==='female' && dayOfTheWeek==3) {
    alert('Your Akan name is ' + femaleAkanName['2'])
  }else if(gender==='female' && dayOfTheWeek==4) {
    alert('Your Akan name is ' + femaleAkanName['3'])
  }else if(gender==='female' && dayOfTheWeek==5) {
    alert('Your Akan name is ' + femaleAkanName['4'])
  }else if(gender==='female' && dayOfTheWeek==6) {
    alert('Your Akan name is ' + femaleAkanName['5'])
  }else if(gender==='female' && dayOfTheWeek==7) {
    alert('Your Akan name is ' + femaleAkanName['6'])
  }
}