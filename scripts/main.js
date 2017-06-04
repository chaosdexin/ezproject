var myImage = document.querySelector('img');

myImage.onclick =function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ezimage.jpg'){
        myImage.setAttribute ('src','images/ezimage2.jpg');
            }else{
                myImage.setAttribute('src','images/ezimage.jpg');
            }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = '欢迎你, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = '欢迎你, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}