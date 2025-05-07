// Login functionality
function login() {
    // Get form values
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Check credentials
    if (email === "rolis" && password === "1234") {
        alert("You have successfully logged in.");
    } else {
        alert("Invalid email or password.");
    }
}

// Initialize any event listeners when the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // You can add any initialization code here
    console.log("JavaScript loaded successfully!");
});



// Sign Up functionality
function signup() {
    // Get form values
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Basic validation
    if (!fullName || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Here, you'd normally send the data to a server
    alert(`Welcome, ${fullName}! You have successfully signed up.`);

    // Optionally, redirect or clear form fields
    // location.href = "login.html";
}

// Optional initialization code
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript loaded successfully!");
});





// Complaint submission functionality
function submitComplaint() {
    // Get form values
    let name = document.getElementById("complaintName").value;
    let email = document.getElementById("complaintEmail").value;
    let message = document.getElementById("complaintMessage").value;

    // Basic validation
    if (!name || !email || !message) {
        alert("Lūdzu, aizpildiet visus laukus.");
        return;
    }

    // Normally, you'd send this data to a server here
    alert(`Jūsu sūdzība tika pieņemta. Paldies, ${name}!`);

    // Optionally, clear form fields
    document.getElementById("complaintForm").reset();
}

// Optional initialization code
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript loaded successfully!");

    const form = document.getElementById("complaintForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent actual form submission
            submitComplaint();
        });
    }
});
