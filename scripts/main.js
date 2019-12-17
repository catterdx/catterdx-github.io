let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
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
    setUserName();
  } else {
  localStorage.setItem('张三', myName);
  myHeading.textContent = 'Hello！' + myName;
  }
}
if(!localStorage.getItem('张三')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('张三');
  myHeading.textContent = 'Hello！' + storedName;
}
myButton.onclick = function() {
   setUserName();
}