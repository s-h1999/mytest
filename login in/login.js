var _a;
(_a = document.getElementById("loginForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    e.preventDefault();
    try {
        var usernameInput = document.querySelector('input[name ="username"]');
        var passwordInput = document.querySelector('input[name ="password"]');
        if (!usernameInput || !passwordInput)
            return;
        var username = usernameInput.value;
        var password = passwordInput.value;
        if (!usernameInput || !passwordInput) {
            alert("plase fill in both ussername and password");
            return;
        }
        if (!/^\d+$/.test(password)) {
            alert("Password must contain digits only.");
            passwordInput.classList.add("error");
            return;
        }
        else {
            passwordInput.classList.remove("error");
        }
        if (username == "admin" && password == "123") {
            alert("login successful");
        }
        else {
            alert("Invail Credentials");
        }
    }
    catch (error) {
        console.error("Unexpected errror", error);
        alert("Something was worng");
    }
});
