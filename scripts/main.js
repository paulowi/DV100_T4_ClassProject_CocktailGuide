function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    // Password validation regex
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,}$/;

    if (!password.match(passwordRegex)) {
        passwordError.textContent = "Password must have at least 1 number, 1 uppercase letter, 1 lowercase letter, and be at least 8 characters long.";
        return false;
    } else {
        passwordError.textContent = "";
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        return false;
    } else {
        confirmPasswordError.textContent = "";
    }

    return true;
}
