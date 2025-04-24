// Navigate to bday1.html
const TheBtn1 = document.getElementById("click-me1");
if (TheBtn1) {
    TheBtn1.addEventListener("click", function() {
        window.location.href = "bday1.html";
    });
}

// Nick's message
const TheBtn2 = document.getElementById("click-me2");
const hidden1 = document.querySelector(".hidden1");
if (TheBtn2 && hidden1) {
    TheBtn2.addEventListener("click", function() {
        hidden1.style.display = "block";
        TheBtn2.style.display = "none";
    });
}

// Hank's message
const TheBtn3 = document.getElementById("click-me3");
const hidden2 = document.querySelector(".hidden2");
if (TheBtn3 && hidden2) {
    TheBtn3.addEventListener("click", function() {
        hidden2.style.display = "block";
        TheBtn3.style.display = "none";
    });
}

// Wu's message
const TheBtn4 = document.getElementById("click-me4");
const hidden3 = document.querySelector(".hidden3");
if (TheBtn4 && hidden3) {
    TheBtn4.addEventListener("click", function() {
        hidden3.style.display = "block";
        TheBtn4.style.display = "none";
    });
}

// Monroe's message
const TheBtn5 = document.querySelector(".click-me5");
const hidden4 = document.querySelector(".hidden4");
if (TheBtn5 && hidden4) {
    TheBtn5.addEventListener("click", function() {
        hidden4.style.display = "block";
        TheBtn5.style.display = "none";
    });
}

// Rosalee's message
const TheBtn6 = document.querySelector(".click-me6");
const hidden5 = document.querySelector(".hidden5");
if (TheBtn6 && hidden5) {
    TheBtn6.addEventListener("click", function() {
        hidden5.style.display = "block";
        TheBtn6.style.display = "none";
    });
}

// Adalind's message
const TheBtn7 = document.querySelector(".click-me7");
const hidden6 = document.querySelector(".hidden6");
if (TheBtn7 && hidden6) {
    TheBtn7.addEventListener("click", function() {
        hidden6.style.display = "block";
        TheBtn7.style.display = "none";
    });
}


// hover images

document.addEventListener("DOMContentLoaded", function () {
    const monroe = document.getElementById("monroe-hover");
    const rosalee = document.getElementById("rosalee-hover");
    const adalind = document.getElementById("adalind-hover");
  
    monroe.addEventListener("mouseover", () => {
      monroe.src = "images/monroeWoged.jpeg";
    });
    monroe.addEventListener("mouseout", () => {
      monroe.src = "images/monroe.jpeg";
    });
  
    rosalee.addEventListener("mouseover", () => {
      rosalee.src = "images/rosaleeWoged.jpeg";
    });
    rosalee.addEventListener("mouseout", () => {
      rosalee.src = "images/rosalee.jpeg";
    });
  
    adalind.addEventListener("mouseover", () => {
      adalind.src = "images/adalindWoged.jpeg";
    });
    adalind.addEventListener("mouseout", () => {
      adalind.src = "images/adalind.jpeg";
    });
  });
  
