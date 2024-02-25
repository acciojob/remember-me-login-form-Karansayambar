    document.addEventListener("DOMContentLoaded", function() {
        // Check if there are saved details
        if(localStorage.getItem("savedUsername") && localStorage.getItem("savedPassword")) {
            var existingButton = document.createElement("button");
            existingButton.id = "existing";
            existingButton.textContent = "Login as existing user.";
            existingButton.addEventListener("click", function() {
                alert("Logged in as " + localStorage.getItem("savedUsername"));
            });
            document.body.appendChild(existingButton);
        }

        // Form submission handling
        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault();

            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var rememberMe = document.getElementById("checkbox").checked;

            // Save details in local storage if "remember me" is checked
            if(rememberMe) {
                localStorage.setItem("savedUsername", username);
                localStorage.setItem("savedPassword", password);
            } else {
                // Remove saved details if "remember me" is unchecked
                localStorage.removeItem("savedUsername");
                localStorage.removeItem("savedPassword");
            }

            // Display logged in alert
            alert("Logged in as " + username);

            // Reload the page to show the "Login as existing user" button if needed
            location.reload();
        });
    });
