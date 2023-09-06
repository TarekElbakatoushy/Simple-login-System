let regBtn = document.getElementById("reg");
let loginBtn = document.getElementById("login");
let Emailinput = document.getElementById("Email");
let Passinput = document.getElementById("Pass");
let userContainer = JSON.parse(localStorage.getItem("Users")) || [];

// regBtn.addEventListener("click", function () {
//   window.location.assign("../Reg.html");
// });

loginBtn.addEventListener("click", function () {
  for (let i = 0; i < userContainer.length; i++) {
    if (
      userContainer[i].Email === Emailinput.value &&
      userContainer[i].Pass === Passinput.value
    ) {
      window.location.assign("../Welcome.html");
      localStorage.setItem("username", userContainer[i].Name);
    } else {
      document.getElementById("fail").classList.remove("d-none");
    }
  }
});
