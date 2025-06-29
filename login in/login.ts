document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    try {
        const usernameInput = document.querySelector('input[name ="username"]') as HTMLInputElement | null;
        const passwordInput = document.querySelector('input[name ="password"]') as HTMLInputElement | null;
        
        if (!usernameInput || !passwordInput) return;

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (!usernameInput || !passwordInput) {
            alert("plase fill in both ussername and password");
            return;
        }

        if (!/^\d+$/.test(password)) {
            alert("Password must contain digits only.");
            passwordInput.classList.add("error");
            return;
        } else {
            passwordInput.classList.remove("error");
        }

        if (username == "admin" && password == "123") {
            alert("login successful");
        } else {
            alert ("Invail Credentials");
        }
        

    } catch (error) {
        console.error("Unexpected errror", error);
        alert("Something was worng");
    
    }
});