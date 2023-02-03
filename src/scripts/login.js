sessionStorage.setItem("loggedIn", false);
const login = () => {
  sessionStorage.setItem("loggedIn", true);
  const email = document.getElementById("email").value;
  const psw = document.getElementById("password").value.length;
  var wrongPsw = document.getElementById("hidden");
  var usernam = document.getElementById("usernamee");

  let user = "user";
  let username = email.split("@")[0];
  if (username.length == 0) {
    usernam.classList.remove("hidden");
  } else if (username == user && psw >= 8) {
    sessionStorage.setItem("username", username);
    window.location.href = "../";

  } else {
    wrongPsw.classList.remove("hidden");
  }

};
document.getElementById("sign-in").addEventListener("click", login);
