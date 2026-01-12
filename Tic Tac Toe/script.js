let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newbtn = document.querySelector(".newbtn");
let winnermsg = document.querySelector(".winnermsg");
let msg = document.querySelector("#msg");

let turnO = true;
let movecount = 0;

const winPatterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if(turnO){
            box.innerText = "O";
            box.classList.add("o-color");
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.classList.add("x-color");
            turnO = true;
        }

        box.disabled = true;
        movecount++;
        checkwinner();
    });
});

const reset = () => {
    turnO = true;
    movecount = 0;
    enableboxes();
    winnermsg.classList.add("hide");
    resetbtn.classList.remove("hide");

}

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
    resetbtn.classList.add("hide");
}

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("o-color", "x-color");
    }
}

const showwinner = (winner) => {
    msg.innerText = `${winner} is Winner.`;
    winnermsg.classList.remove("hide");
    disableboxes();
}

const showDraw = () => {
    msg.innerText = "It's a Draw!";
    winnermsg.classList.remove("hide");
    disableboxes();
}

const checkwinner = () => {
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val && pos2val == pos3val){
                showwinner(pos1val);
                return;
            }
        }

    }

    if (movecount === 9) {
        showDraw();
    }
}

newbtn.addEventListener("click", reset);
resetbtn.addEventListener("click", reset);