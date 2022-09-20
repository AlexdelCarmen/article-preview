const shareButton1 = document.querySelector(".light");
const shareButton2 = document.querySelector(".dark");



const shareContainer = document.querySelector(".share-container");

const infoContainer = document.querySelector(".info-container");

shareButton1.addEventListener("click", ()=> {
    shareContainer.classList.toggle("invisible"); 

})

shareButton2.addEventListener("click", ()=> {
    shareContainer.classList.toggle("invisible"); 

})