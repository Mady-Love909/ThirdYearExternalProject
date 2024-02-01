let calctext = document.querySelector("#calctext")
let actualresult = document.querySelector(".actualresult")
let nums = document.querySelectorAll(".num")
let signs = document.querySelectorAll(".sign");
nums.forEach(num => {
    console.log(num)
});

signs.forEach(sign => {
    console.log(sign)
});

function calcshow(){
    let temp = calctext.value;
    actualresult.innerHTML = temp;

}