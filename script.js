
function Hobbies(){
    document.getElementById("hobbyButton").click();
}

function Skill(){
  document.getElementById("skillButton").click();
}

document.getElementById("nameButton").onclick = function() {home()};
document.getElementById("hobbyButton").onclick = function() {hobby()};
document.getElementById("homeButton").onclick = function() {home()};
document.getElementById("skillButton").onclick = function() {skill()};

function hobby(){
  document.getElementById("hobbyButton").style.backgroundColor = "white";
  document.getElementById("homeButton").style.backgroundColor = "";
  document.getElementById("skillButton").style.backgroundColor = "";
}

function home(){
  document.getElementById("hobbyButton").style.backgroundColor = "";
  document.getElementById("homeButton").style.backgroundColor = "white";
  document.getElementById("skillButton").style.backgroundColor = "";
}

function skill(){
  document.getElementById("hobbyButton").style.backgroundColor = "";
  document.getElementById("homeButton").style.backgroundColor = "";
  document.getElementById("skillButton").style.backgroundColor = "white";
}

