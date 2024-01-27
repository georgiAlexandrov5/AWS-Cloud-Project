const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch ("https://o08nghylgi.execute-api.eu-north-1.amazonaws.com/dev")
    let data = await response.json();
    counter.innerHTML= `${data}`;
}

updateCounter();
