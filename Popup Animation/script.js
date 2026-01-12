const submitBtn = document.querySelector(".btn");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".popup button");
const input = document.querySelector(".info input");

const showPopup = () => {
    popup.classList.add("open-popup");

    setTimeout(()=>{
        input.value = "";
    }, 2500)
}

const hidePopup = () => {
    popup.classList.remove("open-popup");
}

submitBtn.addEventListener("click", showPopup);
closeBtn.addEventListener("click", hidePopup);