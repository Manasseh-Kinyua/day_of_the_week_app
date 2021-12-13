function myButton(event) {
    event.preventDefault()


var year = document.getElementById('year').value;
var month = parseInt(document.getElementById('month').value);
var date = parseInt(document.getElementById('date').value);
var gender = document.querySelector('input[name = gender] : checked').value;

const cc = year.substring(0, 2);
const yy = year.substring(2, 3);
const mm = month;
const dd = date;
}