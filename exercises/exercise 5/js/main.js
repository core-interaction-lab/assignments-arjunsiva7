let myButton = document.getElementById('btn-1');/*Only to refernce the ID */

const myButton2 = document.querySelector('.btn');/*more versatile than getElementById*/
/*you can only declare one name under constant*/
const allButtons = document.querySelectorAll('.btn');

/*var-vaiables*/
/*can use multiple ones and it would take the last one*/
var copy = "this is var copy";

myButton = document.getElementById('btn-2');

console.log(copy);

console.log(myButton);
console.log(allButtons);

myButton.addEventListener('click', function (event) {
    alert('I Clicked the button');
});

/*let myButton = document.getElementById('btn-1');

const myButton2 = document.querySelector('.btn');

const allButtons = document.querySelectorAll('.btn');

var copy = "this is var copy";

myButton = document.getElementById('btn-2');

console.log(copy);

console.log(myButton);
console.log(allButtons);

myButton.addEventListener('click', function (event) {
    alert('I clicked the button');
});*/