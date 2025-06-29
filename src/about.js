document.addEventListener("DOMContentLoaded", () => {
    const apiEndpoint =  "https://flowermaniaapi.onrender.com/reviews"
    //Select our form using its Id
    const formy = document.querySelector("#myform")
    //Select our button
    const getinTouchbtn = document.querySelector("#submitbtn");
    formy.addEventListener("submit", (e)=>{
        e.preventDefault();
        const formDta = new FormData(formy);
        const review = {};
        formDta.forEach((value,key)=>{
            //Populate our object with key value pairs
            review[key] = value;
        })
        //send to server
        pushdta(review);
    })
    const pushdta = (obj) => {
        fetch(apiEndpoint, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(data =>{
            alert("Data Sent successfully we wil be in touch")
            formy.reset();
        })
        .catch(error => console.log(error));
        
    }
})