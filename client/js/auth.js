document.addEventListener("DOMContentLoaded", () => {
  const authForm = document.getElementById("authForm");
  const authTitle = document.getElementById("authTitle");
  const authBtn = document.getElementById("authBtn");
  const toggleAuth = document.getElementById("toggleAuth");

  let isLogin = true;

  toggleAuth.addEventListener("click", (e) => {
    if (e.target.id === "toggleLink") {
      isLogin = !isLogin;
      authTitle.textContent = isLogin ? "Login" : "Sign Up";
      authBtn.textContent = isLogin ? "Login" : "Sign Up";
      toggleAuth.innerHTML = isLogin
        ? `Don't have an account? <span id="toggleLink">Sign Up</span>`
        : `Already have an account? <span id="toggleLink">Login</span>`;
    }
  });

  authForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    if (isLogin) {
      if (localStorage.getItem(username) === password) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "chat.html";
      } else {
        alert("Invalid username or password");
      }
    } else {
      if (localStorage.getItem(username)) {
        alert("User already exists");
      } else {
        localStorage.setItem(username, password);
        alert("Signup successful! Please login.");
        isLogin = true;
        authTitle.textContent = "Login";
        authBtn.textContent = "Login";
        toggleAuth.innerHTML =
          `Don't have an account? <span id="toggleLink">Sign Up</span>`;
      }
    }
  });
});
