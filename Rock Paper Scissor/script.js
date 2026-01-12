let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
let options = ["rock", "paper", "scissors"];
let msg = document.querySelector("#msg");
let userscorepara = document.querySelector("#userscore");
let compscorepara = document.querySelector("#compscore");

// User Choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

const playgame = (userchoice) => {
    const compchoice = gencompchoice();

    if(userchoice === compchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if (userchoice === "rock"){
            userwin = compchoice === "paper"? false: true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "rock"? true: false;
        }
        else{
            userwin = compchoice === "rock"? false: true;
        }

        showwinner(userwin, userchoice, compchoice);
    }

}


// Show Winner
const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Won. Your ${userchoice} beats ${compchoice}.`;
        msg.style.backgroundColor = "#4CAF50";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You Lost. ${compchoice} beats your ${userchoice}.`;
        msg.style.backgroundColor = "#F44336";
    }
}

// Draw Game
const drawgame = () => {
    msg.innerText = "It's a draw.";
    msg.style.backgroundColor = "#081b31";
}

// Computer Choice
const gencompchoice = () => {
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}