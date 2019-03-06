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
  document.getElementById("caption").style.display = "block";
  caption.innerHTML = element.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
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


//BUTTON TOP
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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


