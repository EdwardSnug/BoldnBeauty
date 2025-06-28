document.addEventListener("DOMContentLoaded", e => {
    e.preventDefault();
    const apiEndpoint =  "http://localhost:3000/review"
    const formy = document.querySelector("#myform")
    const getinTouchbtn = document.querySelector("#submitbtn");
    console.log(getinTouchbtn);
    let review = [];
    formy.addEventListener("submit", ()=>{
        const formDta = new FormData(formy);
        formDta.forEach((value,key)=>{
            review[key] = value;
        })
        pushdta(review);
    })
    const pushdta = (obj) => {
        fetch(apiEndpoint, {
            method: "POST",
            headers: {"Content-type":"application-json"},
            body:JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(data =>{
            alert("Data Sent successfully we wil be in touch")
        })
        .catch(error => console.log(error));
        
    }
})