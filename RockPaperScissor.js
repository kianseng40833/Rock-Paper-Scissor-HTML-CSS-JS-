function calculate(buttonChoice){
    var choice = buttonChoice.innerHTML;
    var computerChoice = getRandomChoice();

    document.getElementById("computerChoice").innerHTML = computerChoice;
    if (choice == computerChoice){
        document.getElementById("result").innerHTML = "It's a tie.";
    }else if(choice === "Rock" && computerChoice === "Scissor"){
        document.getElementById("result").innerHTML = "Player Win!";
    }else if(choice === "Paper" && computerChoice === "Rock"){
        document.getElementById("result").innerHTML = "Player Win!";
    }else if(choice === "Scissor" && computerChoice === "Paper"){
        document.getElementById("result").innerHTML = "Player Win!";
    }else if(choice === "Scissor" && computerChoice === "Rock"){
        document.getElementById("result").innerHTML = "Computer Win!";
    }else if(choice === "Rock" && computerChoice === "Paper"){
        document.getElementById("result").innerHTML = "Computer Win!";
    }else if(choice === "Paper" && computerChoice === "Scissor"){
        document.getElementById("result").innerHTML = "Computer Win!";
    }
}

function getRandomChoice(){
    var computerChoice = ["Rock","Paper","Scissor"];
    var computerResult = Math.floor(Math.random() * computerChoice.length);
    var randomChoice = computerChoice[computerResult];

    return randomChoice;
}