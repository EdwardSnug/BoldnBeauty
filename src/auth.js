//DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {

    // Button click event listeners
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
        //Display continue without an Account button.
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
        //creating variables to store our username and password for each user
        const username = document.getElementById("signup-username").value.trim();
        const password = document.getElementById("signup-password").value;
        //Firstly we will create our users data array
        //Retrieve user data from the browser's local storage and parses it into our users array
        //Using localStorage to keep the session record
        //localStorage.getItem("users") -> this method retrieves a string value from localStorage by its key.
        //Syntax:localStorage.getItem(key)
        //uses logical OR to check if record exists 
        let users = JSON.parse(localStorage.getItem("users") || "[]");
        //Find if username already exists
        const existingUser = users.find(user => user.username === username);

        if (existingUser) {
            alert("Username already exists.");
        } else {
            users.push({ username, password });
            localStorage.setItem("users", JSON.stringify(users));
            alert("Signup successful! You can now log in.");
            formSignup.reset();
            formSignup.style.display = "none";
            loginbtn.style.display = "block"

        }
        //THE COMMENTED CODE BELOW IS SAME AS OUR FIND FUNCTION ABOVE
        // if (users.some(user => user.username === username)) {
        //     alert("Username already exists.");
        // } else {
        //     users.push({ username, password });
        //     localStorage.setItem("users", JSON.stringify(users));
        //     alert("Signup successful! You can now log in.");
        //     this.reset(); 
        
    })
    //  Login logic
    formLogin.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("login-username").value.trim();
        const password = document.getElementById("login-password").value;

        let users = JSON.parse(localStorage.getItem("users") || "[]");
        //Find our username and match it with its stored password value

        const match = users.find(user => user.username === username && user.password === password);

        if (match) {
            alert(`Welcome, ${username}! Redirecting to Home page...`);
            localStorage.setItem("loggedInUser", username);
            this.reset();

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
})