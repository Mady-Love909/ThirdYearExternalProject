// Winning Pattern 
// Horizontal Pattern
// 0 1 2
// 3 4 5
// 6 7 8

// Vertical Pattern 
// 0 3 6
// 1 4 7
// 2 5 8

// Diagonal Pattern
// 0 4 8
// 2 4 6


let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let winmsg = document.querySelector(".winmsg");
let wincont = document.querySelector(".winnercont");
let turn = document.querySelector(".turn");
let newGamebtn = document.querySelector(".new-btn");

// Alternate Turns

let turnO = true;//PlayerX , Player0
let turnply = document.querySelector("#turnply");
const winning_pattern = [
    [0, 1, 2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];


const resetGame = ()=>{
    turnO = false;
    enableBoxes();
    wincont.classList.add("hide");
    
    // console.log("Game reset");
}

turnply.innerText = "1";
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        
        
        if(turnO){
            box.innerText = "O";
            turnply.innerText = "2";
            document.body.style.backgroundColor = "teal";
            box.style.color = "#b0413e";
            turnO = false;
        }
        else{
            box.innerText = "X";
            document.body.style.backgroundColor = "#b0413e";
            box.style.color = "teal";
            turnply.innerText = "1";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();

    })
});

const boxDisabled = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for(box of boxes){
        box.innerText= "";
        box.disabled = false;
    }
}

const showWinner = (pos1Val) =>{
    if(pos1Val == "O"){
                    
        winmsg.innerText = `Congratulations, Player 1 is the Winner Of This Game`;
        
    }
    else{
        
        winmsg.innerText = `Congratulations, Player 2 is the Winner Of This Game`;
        
    }
}
const checkWinner = () =>{
    for(let pattern of winning_pattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if( pos1Val!="" && pos2Val !="" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val===pos3Val){
                
                wincont.classList.remove("hide");
                turn.style.display = "none";
                showWinner(pos1Val);
                boxDisabled();
            }
            // (pos1Val !== pos2Val && pos2Val!==pos3Val)
            
           
        }
        
    }
    
}

// resetbtn.addEventListener("click",()=>{
//     for(box of boxes){
//         box.innerText = "";
//     }
// });

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);