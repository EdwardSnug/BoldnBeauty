//This JS file is for implimenting functionality and logic to my homepage.html file
//Get button for products page
const shopbtn = document.querySelector("#shopNow");
shopbtn.addEventListener("click", (e) =>{
    e.preventDefault();
     window.location.href = "./products.html";
 })