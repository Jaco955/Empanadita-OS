function updateTime() {
   var PacTheMan = new Date(). toLocaleString();
   var timeText = document.querySelector("#timeElement");
   timeText.innerHTML = PacTheMan
}
 setInterval(updateTime, 1000)

 dragElement(document.getElementById("welcome"));

function dragElement(element) {

  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

 
  if (document.getElementById(element.id + "header")) {
 
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
 
    element.onmousedown = startDragging;
  }

   function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
 
    initialX = e.clientX;
    initialY = e.clientY;
 
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

 
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
 
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
 
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

 
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  } 
}

dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("foo-fighters"));
dragElement(document.getElementById("clicky-things"));
dragElement(document.getElementById("rawr"));

var welcomeScreen = document.querySelector("#welcome")
var foofightersScreen = document.querySelector("#foo-fighters")
var clickythingsScreen = document.querySelector("#clicky-things")

function openWindow(element) {
  element.style.display = "flex"
}
function closeWindow(element) {
  element.style.display = "none"
}

var welcomeScreenOpen = document.querySelector("#welcomeopen")
var welcomeScreenClose = document.querySelector("#welcomeclose")

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});
welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

var foofightersScreenOpen = document.querySelector("#welcomeopen")
var foofightersScreenClose = document.querySelector("#foo-fightersclose")

foofightersScreenOpen.addEventListener("click", function() {
  openWindow(foofightersScreen);
});
foofightersScreenClose.addEventListener("click", function() {
  closeWindow(foofightersScreen);
});

var clickythingsScreenOpen = document.querySelector("#welcomeopen")
var clickythingsScreenClose = document.querySelector("#clicky-thingsclose")

clickythingsScreenOpen.addEventListener("click", function() {
  openWindow(clickythingsScreen);
});
clickythingsScreenClose.addEventListener("click", function() {
  closeWindow(clickythingsScreen);
});