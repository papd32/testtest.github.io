var myHeading = document.querySelector('h1');
myHeading.textContent = 'HELLO WORLD!';

/*
document.querySelector('html').onclick = function() {

    alert('Ouch! Stop poking me!')
}
*/


var myImage = document.querySelector('img');
myImage.setAttribute('src', 'images/demo.png')

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/demo.png') {
      myImage.setAttribute ('src','images/test.png');
    } else {
      myImage.setAttribute ('src','images/demo.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUseraName() {
    let myName = prompt('please enter your name.');
    if(!myName || myName === null) {
        setUseraName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;

    }
}

if(!localStorage.getItem('name')) {
    setUseraName();
}  else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName; 
}

myButton.onclick = function() {
    setUseraName();
}