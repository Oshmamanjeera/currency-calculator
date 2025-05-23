let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const computerscorepara=document.querySelector("#computer-score");
const generateComputerchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx =Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game Was Draw! Play Again";
    msg.style.backgroundColor="#081b31";
};
const showWinner=(userWin,choiceId,Computerchoice)=>{
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("You Win");
        msg.innerText=`You Win! ${choiceId} beats ${Computerchoice}`;
        msg.style.backgroundColor="green";
    }else{
        computerscore++;
        computerscorepara.innerText=computerscore;
        console.log("You lose");
        msg.innerText=`You Lose!  ${Computerchoice} beats ${choiceId}`;
        msg.style.backgroundColor="red";
    }
};
const playGame=(choiceId)=>{
     console.log("user choice=", choiceId);
     const Computerchoice=generateComputerchoice();
     console.log("computer choice=", Computerchoice); 
     if(choiceId===Computerchoice){
        drawGame();
     }else{
        let userWin = true;
        if(choiceId === "rock")
        {
           userWin=Computerchoice==="paper"?false:true; 
        }else if(choiceId==="paper"){
            userWin=Computerchoice==="scissors"?false:true;
        }else{
           userWin=Computerchoice==="rock"? false:true;
        }
        showWinner(userWin,choiceId,Computerchoice);
     }
};
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
       const choiceId=choice.getAttribute("id");
       console.log("choice was clicked",choiceId);
       playGame(choiceId);
    });
}); 