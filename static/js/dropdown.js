var dropdown = document.getElementById("dropdown-content");
var dropdownContent = document.getElementById("review-card");
var dropdownTitle = document.getElementById("dropdown-title");

var dropdownHidden = document.getElementById("dropdown-content-hidden");
var dropdownContentHidden = document.getElementById("review-card-hidden");
var dropdownTitleHidden = document.getElementById("dropdown-title-hidden");

var dropdownHidden2 = document.getElementById("dropdown-content-hidden2");
var dropdownContentHidden2 = document.getElementById("review-card-hidden2");
var dropdownTitleHidden2 = document.getElementById("dropdown-title-hidden2");

var dropdownHidden3 = document.getElementById("dropdown-content-hidden3");
var dropdownContentHidden3 = document.getElementById("review-card-hidden3");
var dropdownTitleHidden3 = document.getElementById("dropdown-title-hidden3");

var dropdownHidden4 = document.getElementById("dropdown-content-hidden4");
var dropdownContentHidden4 = document.getElementById("review-card-hidden4");
var dropdownTitleHidden4 = document.getElementById("dropdown-title-hidden4");

function toggleDropdown() {
    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
    } 
    
    else {
      dropdown.style.display = "none";
    }
}

function toggleDropdownHidden() {
  if (dropdownHidden.style.display === "block") {
    dropdownHidden.style.display = "none";
  } 
  
  else {
    dropdownHidden.style.display = "block";
  }
}

function toggleDropdownHidden2() {
  if (dropdownHidden2.style.display === "block") {
    dropdownHidden2.style.display = "none";
  } 
  
  else {
    dropdownHidden2.style.display = "block";
  }
}

function toggleDropdownHidden3() {
  if (dropdownHidden3.style.display === "block") {
    dropdownHidden3.style.display = "none";
  } 
  
  else {
    dropdownHidden3.style.display = "block";
  }
}

function toggleDropdownHidden4() {
  if (dropdownHidden4.style.display === "block") {
    dropdownHidden4.style.display = "none";
  } 
  
  else {
    dropdownHidden4.style.display = "block";
  }
}