let Nameinput = document.getElementById("Name");
let Emailinput = document.getElementById("Email");
let Passinput = document.getElementById("Pass");
let regBtn = document.getElementById("regBtn");
let textSuccess = document.getElementById("Success");
let textFail = document.getElementById("Fail");
let signbtn = document.getElementById("signin");
let userContainer = [];

userContainer = JSON.parse(localStorage.getItem("Users")) || [];

signbtn.addEventListener("click", function () {
  window.location.assign("../index.html");
});

regBtn.addEventListener("click", function () {
  if (validateEmail() == true && ValidatePass() == true && ValidateName() == true && nouserRepeat() == true) {
    let NameValue = Nameinput.value;
    let EmailValue = Emailinput.value;
    let PassValue = Passinput.value;
    let user = {
      Name: NameValue,
      Email: EmailValue,
      Pass: PassValue,
    };
    userContainer.push(user);
    localStorage.setItem("Users", JSON.stringify(userContainer));
    textSuccess.classList.remove("d-none");
    clear();
    Emailinput.classList.remove("is-valid");
    setTimeout(function () {
      window.location.assign("../index.html");
    }, 2000);
  }
});

function clear() {
  Nameinput.value = "";
  Emailinput.value = "";
  Passinput.value = "";
}

function validateEmail() {
  let EmailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let EmailValue = Emailinput.value;
  if (EmailPattern.test(EmailValue) == true) {
    Emailinput.classList.remove("is-invalid");
    Emailinput.classList.add("is-valid");
    document.getElementById("not-valid").classList.add("d-none");
    return true;
  } else {
    Emailinput.classList.remove("is-valid");
    Emailinput.classList.add("is-invalid");
    document.getElementById("not-valid").classList.remove("d-none");
    return false;
  }
}


function ValidatePass() {
  if (Passinput.value != "") {
    return true
  }
  else {
    document.getElementById("Passtext").classList.remove("d-none")
    return false
  }
}


function ValidateName() {
  let NamePattern = /^[A-Za-z][A-Za-z]{2,20}$/;
  if (NamePattern.test(Nameinput.value)) {
    return true
  }
  else {
    document.getElementById("Nametext").classList.remove("d-none")
    return false
  }
}

function nouserRepeat() {
  if (userContainer.length === 0) {
    return true
  }
  else {
    for (let i = 0; i <= userContainer.length; i++) {
      if (Emailinput.value != userContainer[i].Email) {
        return true
      } else {
        document.getElementById("Fail").classList.remove("d-none");
        return false;
      }
    }
  }
}

