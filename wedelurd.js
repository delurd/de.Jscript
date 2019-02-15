//portofolio
//filtering
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// GET THE MODAL
var modal = document.getElementById('myModal');

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("myModal").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}



// Get the MODALS PORTOFOLIO
var modals = document.getElementById('myModals');


// Get the button that opens the modal
var btn = document.getElementById("myBtnport");

// Get the <span> element that closes the modal
var line = document.getElementsByClassName("clos")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
 modals.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
line.onclick = function() {
  modals.style.display = "none";
}


function aboutFunction() {
  var elmnt = document.getElementById("about");
  elmnt.scrollIntoView();
}


// LOADERS
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loaders").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

// BODY OVERFLOW
function nflowFunction() {
  document.getElementById("oFlow").style.overflowY = "scroll";
}
function fflowFunction() {
  document.getElementById("oFlow").style.overflowY = "hidden";
}
