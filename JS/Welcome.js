let logout = document.getElementById("logout");
let text = document.getElementById("text");
let userName = localStorage.getItem("username");

logout.addEventListener("click", function () {
  window.location.assign("../../JavaScript/ASSIGN-3-LOGIN-PAGE/index.html");
  localStorage.removeItem("username");
});

text.innerHTML = `Welcome ${userName}!`;
