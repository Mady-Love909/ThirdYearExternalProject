let demo = document.getElementById("demo");
let start = document.querySelector(".start");
let end = document.querySelector(".end");
let roll = document.querySelector("#dicebtn");
let count = document.querySelector(".count");
let ocount = document.querySelector(".ocount");
let player = document.querySelector(".player");
let pos = null;
let move = document.querySelector("#move")
// start.innerHTML = "Start";
// end.innerHTML = "End";

const min = 1
const max = 6

// generating a random number


roll.addEventListener("click",()=>{
    const a = Math.floor(Math.random() * (max - min + 1)) + min;
    count.innerHTML = a;
    // playermovement(a);
    
    dice(a);
})



const dice =(a)=>{
    const movedice = ["*","**","***","****","*****","******"];
    ocount.innerHTML =  movedice[a-1];

}

// const playermovement = (a) =>{
//     if(player.style.bottom == "0px"){
//         let move = 75*a;
//     pos = move+"px"
//     player.style.bottom = pos;
//     }
// }

move.addEventListener("click",function callme(){
    for(;;){
        
        player.style.left = "75px";
        callme();
    }
})