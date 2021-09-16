var imgURL = chrome.runtime.getURL("images/icon256.png");
alert(imgURL );
var body = document.getElementsByTagName("body")[0];
var img = document.createElement("img");

body.appendChild(img);
img.src = imgURL;