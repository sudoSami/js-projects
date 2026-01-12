const dropdowns = document.querySelectorAll(".select-container select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const input = document.querySelector("input");
const output = document.querySelector(".output");
const icon = document.getElementById("exchange-icon");
const url = `https://open.er-api.com/v6/latest/`;

for(let select of dropdowns){
for (currCode in countryList){
    let option = document.createElement("option");
    option.innerText = currCode;
    option.value = currCode;
    option.selected = (select.name === "from" && currCode === "USD") || (select.name === "to" && currCode === "PKR");
    select.appendChild(option);
    }

    select.addEventListener("change", (e)=>{
        updateFlag(e.target);
    })
}

const swap = () => {
    icon.classList.toggle("rotated");

    let temp = fromCurr.value;
    fromCurr.value = toCurr.value;
    toCurr.value = temp;

    updateFlag(fromCurr);
    updateFlag(toCurr);
}

icon.addEventListener("click", swap);

const updateRate = async() => {
    let amount = input.value;
    if (amount === "" || amount < 1){
        output.innerText = "Enter the Valid Amount.";
        return;
    }

    let from = fromCurr.value;
    let to = toCurr.value;
    
    let response = await fetch(`${url}${from}`);
    let data = await response.json();
    let rate = data.rates[to];

    let result = (amount * rate).toFixed(2);
    output.innerText = `${amount} ${from} = ${result} ${to}`;
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let source = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let image = element.parentElement.querySelector("img");
    image.src = source;
}

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    updateRate();
})

window.onload = updateRate;

