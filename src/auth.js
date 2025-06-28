// // Button click event listeners
const signupbtn = document.querySelector("#Signup");
const formSignup = document.querySelector("#signup-form")
const loginbtn = document.querySelector("#login");
const formLogin = document.querySelector("#login-form");
const noSignupbtn = document.querySelector("#noSignup");
//SignUp and Login buttons display forms
signupbtn.addEventListener("click", () => {
    //Display the form input fields for signing up
    formSignup.style.display = "flex";
    formSignup.style.flexDirection = "column";
    //Hide buttons
    signupbtn.style.display = "none"
    loginbtn.style.display = "none"
    noSignupbtn.style.display = "none";
})
loginbtn.addEventListener("click", () => {
    //Display the form input fields for signing up
    formLogin.style.display = "flex";
    formLogin.style.flexDirection = "column";
    //Hide other buttons
    loginbtn.style.display = "none"
    signupbtn.style.display = "none"
    noSignupbtn.style.display = "none";
})
const cancelbtn1 = document.querySelector("#cancel1")
const cancelbtn2 = document.querySelector("#cancel2")
cancelbtn1.addEventListener("click", () => {
    //On clicking the cancel button the forms to be hidden
    formSignup.style.display = "none"
    noSignupbtn.style.display = "block";
})
cancelbtn2.addEventListener("click", () => {
    //On clicking the cancel button the forms to be hidden
    formLogin.style.display = "none"
    noSignupbtn.style.display = "block";
})
//Signup logic
formSignup.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("signup-username").value.trim();
    const password = document.getElementById("signup-password").value;
    //Using localStorage to keep the session record
    let users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some(user => user.username === username)) {
        alert("Username already exists.");
    } else {
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Signup successful! You can now log in.");
        this.reset();
        this.style.display = "none";
    }
})
//  Login logic
formLogin.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value;

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    const match = users.find(user => user.username === username && user.password === password);

    if (match) {
        alert(`Welcome, ${username}! Redirecting to Home page...`);
        localStorage.setItem("loggedInUser", username);

        // Redirect to Home Page
        window.location.href = "Homepage.html";
    } else {
        alert("Invalid username or password.");
    }
});
noSignupbtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "Homepage.html";
}) 