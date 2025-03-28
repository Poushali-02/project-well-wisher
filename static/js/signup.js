document.getElementById("signupForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("error-message");

    // Clear previous error messages
    errorMessage.textContent = "";

    // Username validation
    if (username.length < 3) {
        errorMessage.textContent = "Username must be at least 3 characters!";
        return;
    }

    // Password length check
    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters!";
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return;
    }

    // Send form data to Flask backend using Fetch API
    try {
        const response = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username: username,
                password: password
            })
        });

        if (response.redirected) {
            window.location.href = response.url; // Redirect user to the main page
        } else {
            const result = await response.json();
            errorMessage.textContent = result.error || "Signup failed!";
        }
    } catch (error) {
        errorMessage.textContent = "An error occurred. Please try again.";
    }
});
