const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

button.addEventListener("click", (event)=>{
    event.preventDefault();
    if(!input.value){
        alert("Please input a value");
    } else{
        check();
    }
})

const check = () => {
    let string = input.value;
    string = string.replace(/[^a-zA-Z0-9]/g, "");
    string = string.toLowerCase();

    let k = string.length;

    for(let i = 0; i < k; i++){
        if(string[i] !== string[k-1]){
            result.innerText = `${input.value} is not a palindrome`;
            return;
        }
        k--;
    }

    result.innerText = `${input.value} is a palindrome`;

}