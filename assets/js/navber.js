window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("navbar").style.backgroundColor = "rgb(62 62 62)";
    document.getElementById("logo").style.fontSize = "1.5rem";
    document.getElementById("logo").style.transition = ".4s";

  } else {
    document.getElementById("navbar").style.padding = "40px 10px";
    document.getElementById("navbar").style.backgroundColor = "#00800000";
    document.getElementById("logo").style.fontSize = "2rem";
    document.getElementById("logo").style.transition = ".4s";
  }
}



// filter section

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
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



// Form Section

function myFunction(e) {
  let name = document.forms["myForm"]["name"].value;
  let email = document.forms["myForm"]["email"].value;
  let description = document.forms["myForm"]["description"].value;
  console.log(name.length)

  if(name.length > 0){
    document.getElementById('fname').innerHTML = null
  }else{
    document.getElementById('fname').innerHTML = 'Name is required'
  }

  if(email.length > 0){
    document.getElementById('Femail').innerHTML = null
  }else{
    document.getElementById('Femail').innerHTML = 'Email is required'
  }

  if(description.length > 0){
    document.getElementById('Fdesc').innerHTML = null
  }else{
    document.getElementById('Fdesc').innerHTML = 'Desription is required'
  }

  if(name.length >0 && email.length >0 && description.length > 0){
    alert('Message sent successfully')
  }




}