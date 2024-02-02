let calctext = document.querySelector("#calctext")
let actualresult = document.querySelector(".actualresult")
let nums = document.querySelectorAll(".num")
let signs = document.querySelectorAll(".sign");
let calculation_text = "";
let acbtn = document.querySelector(".acbtn");
let backbtn = document.querySelector(".back")


nums.forEach(num => {
    num.addEventListener("click",()=>{
        // calctext.value+=num.innerText
        calculation_text+=num.innerText;
        
        // console.log(calculation_text);
        let t = Array.from(calculation_text)
        // calruns(t);
        
    })
});


let calruns = (t)=>{
    // for(let values of t){
        // if(values == "+" || values == "-" || values == "*" || values == "/"){
        //     console.log("Sign clicked");
        // }
        // else{
        //     console.log("They're numbers");
        // }
        console.log(t.findIndex(()=>{
            return "+";
        }));;
        
    // }
}

// signs.forEach(sign => {
//     // console.log(sign)
//     sign.addEventListener("click",()=>{
//         console.log("Sign clicked");
//     })
// });

function calcshow(){
    let temp = calctext.value;
    actualresult.innerHTML = temp;
    // actualresult.innerHTML = calculation_text;

}

acbtn.addEventListener("click",()=>{
    calctext.value = "";
})


backbtn.addEventListener("click",()=>{
    calctext.value = calctext.value.substring(0,calctext.value.length - 1)
})

