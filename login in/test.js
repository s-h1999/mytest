console.log("JS file is working");

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  if (username === "admin" && password === "1234") {
    alert("Login successful!");
  } else {
    alert("Invalid credentials.");
  }
});
