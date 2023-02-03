sessionStorage.setItem("loggedIn", false);;
const login = () => {
  sessionStorage.setItem("loggedIn", true);
  const email = document.getElementById("email").value;
  const psw = document.getElementById("password").value.length;
  var wrongPsw = document.getElementById("hidden");

  let username = email.split("@")[0];
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && psw >= 8) {
    sessionStorage.setItem("username", username);
    window.location.href = "../";

  } else {
    wrongPsw.classList.remove("hidden");
  }

};
document.getElementById("sign-in").addEventListener("click", login);
