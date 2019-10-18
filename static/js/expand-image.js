// variables
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal

var img = document.getElementById("myImg");
var modalImg = document.getElementById("image");

// buttons
var expandButton = document.getElementsByClassName("expand-icon")[0];
var rotateButton = document.getElementsByClassName("rotate")[0];
var zoomIn = document.getElementsByClassName("zoom-in")[0];
var zoomOut = document.getElementsByClassName("zoom-out")[0];
var closeButton = document.getElementsByClassName("close")[0];

// rotation angle
var angle = 0;

// When the user clicks on expand button, open the image in new view
expandButton.onclick = function() { 
    modal.style.display = "block";
    $('#image').attr('src', $('#myImg').attr('src')); 
    // hide html scrollbar
    document.documentElement.style.overflowY = "hidden"; 
    // hide top navigation bar  
    document.getElementById("hide-nav").style.zIndex = "-1"; 
}

// When the user clicks on rotation, rotate by 90 degrees each time
rotateButton.onclick = function() { 
    angle += 90;
    $('#image').css('transform','rotate(' + angle + 'deg)');
}

// When the user clicks on close, return to original state
closeButton.onclick = function() { 
    modal.style.display = "none";
    document.documentElement.style.overflowY = "auto";  
    document.getElementById("hide-nav").style.zIndex = "1";  
}

// zoom in
zoomIn.onclick = function() { 
    var currWidth = modalImg.clientWidth;
    modalImg.style.width = (currWidth + 100) + "px";
}

// zoom out
zoomOut.onclick = function() { 
    var currWidth = modalImg.clientWidth;
    modalImg.style.width = (currWidth - 100) + "px";
    
}