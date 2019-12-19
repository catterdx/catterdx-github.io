let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let myTitle = document.querySelector('title');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/top.jpg') {
      myImage.setAttribute('src', 'images/1.jpg');
    } else {
      myImage.setAttribute('src', 'images/top.jpg');
    }
}
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    alert("请输入你的名字。");
	setUserName();
  } else {
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello！' + myName;
  myTitle.textContent = '欢迎' + myName +'!';
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
   myHeading.textContent = 'Hello！' + storedName;
   myTitle.textContent = '欢迎' + storedName +'!';
 
}
myButton.onclick = function() {
   setUserName();
}