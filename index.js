function hover(img) {
  img.src = "../Images/Smile2.jpg";
}
function hoverOut(img) {
  img.src = "../Images/Smile1.jpg";
}
function outline() {
  let under = document.getElementById("under");
  under.style.textDecoration = "none";
}
function underline() {
  let under = document.getElementById("under");
  under.style.textDecoration = "underline rgb(0, 255, 136)";
}
function lineout() {
  // let under = document.getElementById("under");
  let over = document.getElementById("over");
  // under.style.textDecoration = "none";
  over.style.textDecoration = "none";
}
function overline() {
  let over = document.getElementById("over");
  over.style.textDecoration = "underline rgb(0, 255, 136)";
}

function display() {
  let text = document.getElementById("grey");
  text.style.display = "block";
}
// let under = document.getElementById("button");
// let displaySetting=text.style.display;
// if(displaySetting=="block"){
//   text.style.display="none"
// }
// else{

// }
// // under.style.display = "none";

//   document.getElementsByClassName("underline").style.textDecoration =
//     "underline";
//   // "Solid";
//   //   document.getElementsByClassName("underline").style.borderBottomWidth = "3px";
//   //   document.getElementsByClassName("underline").style.borderColor = "green";
// }
// let button = document.getElementsByTagName("button");
// button.addEventListener("mouseover", function () {
//   button.style.background = "red";
// });
// button.addEventListener("mouseover", function () {
//   button.style.background = "rgb(0, 255, 136)";
// });
const button = document.querySelector("#button");
button.onmousemove = function (e) {
  const x = e.pageX - button.offsetLeft;
  const y = e.pageY - button.offsetTop;

  button.style.setProperty("--x", x + "px");
  button.style.setProperty("--y", y + "px");
};
