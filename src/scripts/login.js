const login = () => {
  localStorage.setItem("loggedIn", true);
  const email = document.getElementById("email").value;
  const username = email.split("@")[0];
  localStorage.setItem("username", username);
  window.history.back();
};

document.getElementById("sign-in").addEventListener("click", login);
