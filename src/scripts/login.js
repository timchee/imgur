

sessionStorage.setItem("loggedIn", false)
const login = () => {
  sessionStorage.setItem("loggedIn", true);
  const email = document.getElementById("email").value;
  let username = email.split("@")[0];
  if (username === '') {
    username = 'User'
  }
  sessionStorage.setItem("username", username);
  window.history.back();
  
};

document.getElementById("sign-in").addEventListener("click", login);


