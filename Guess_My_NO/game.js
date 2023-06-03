let checkNum = document.querySelector("#number")
let btn = document.querySelector(".btn")
let chance =document.querySelector(".Chance")
let score =document.querySelector(".score")
let update = document.querySelector(".Guess")
let randomNum = parseInt((Math.random()*100)+1)
let body=document.querySelector("body")
let win =document.querySelector(".text")

console.log(randomNum)

let count = 100;

const callme=()=>{
    if(randomNum < parseInt(checkNum.value)){
        update.innerHTML = "Your Guess is High ";
        count--;
        chance.innerHTML=`${count}`;
    }
    else if (randomNum > parseInt(checkNum.value)){
        update.innerHTML = "Your Guess is Low ";
        count--;
        chance.innerHTML=`${count}`;
    }
    else{
        update.innerHTML = `${randomNum}`;
        count--;
        score.innerHTML=`${count}`;
        body.style.backgroundColor ="#78e08f"
        win.innerHTML = "Your Are Win "      
    }
}