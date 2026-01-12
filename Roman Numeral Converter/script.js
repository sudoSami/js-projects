const input = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
  ];

const convert = () => {
     let num = parseInt(input.value);
     let result = "";
    
    for (let i = 0; i < romanNumerals.length; i++){
        while (num >= romanNumerals[i].value){
            result += romanNumerals[i].symbol;
            num -= romanNumerals[i].value;
        }
    }

    return result;
}

const check = () => {
    output.innerText = "";
    output.style.color = "#dcded8";
    output.style.borderColor = "#ffcf56";


    if (!input.value){
        return showError("Please enter a valid number");
    }
    if (input.value < 1){
        return showError("Please enter a number greater than or equal to 1");
    }
    if (input.value > 3999){
        return showError("Please enter a number less than or equal to 3999");
    }

    output.innerText = convert();
}

const showError = (msg) => {
    output.innerText = msg;
    output.style.color = "red";
    output.style.borderColor = "red";
    input.value = "";
}

btn.addEventListener("click", check);

input.addEventListener("keydown", (e)=>{
    if (e.key==="Enter"){
        check();
    }
})
