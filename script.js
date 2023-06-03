// Question :1

let question1=document.querySelector("#text")
question1.innerHTML="Hello prepbytes friends"
// console.log(question1.innerHTML)


// Question :2
let question2 = document.getElementsByTagName("h1")
question2[1].innerHTML="Hello Friends"
// console.log(question2[1].innerHTML)

// Question :3
let question3 = document.querySelector(".box")
question3.innerHTML="Element class has a box content return by js"
// console.log(question3.innerHTML)

// Question :4
let changetext =document.querySelector("#changetext")
let change = true
changetext.addEventListener("click",()=>{
    if(change){
        changetext.innerHTML="Hello World"
        change=false
    }
    else{
        changetext.innerHTML="Hello"
        change=true
    }
})
// question :5
let changecontent = document.querySelector("#changecontent")
// console.log(changecontent.innerHTML)
let btn = document.querySelector(".btn-1")
// console.log(btn)
btn.addEventListener("click",()=>{
    if(change){
        changecontent.innerHTML="Welcome to Prepbytes"
        change = false
    }
    else{
        changecontent.innerHTML= "Hello World"
        change = true
    }

})

// question :6
let question6 = document.querySelector("#heading");
question6.addEventListener("click",()=>{
    if(change){
        question6.style.color = "red"
        question6.style.cursor = "pointer"
        change = false;
    }
    else{
        question6.style.color = "black";
        question6.style.cursor = "pointer"
        change = true
    }
})


// question :7
let question7 = document.querySelector(".parent")
const changeStyle =()=>{
    if(change){
        question7.style.flexDirection = "column"
        change = false
    }
    else{
        question7.style.flexDirection = "row"
        change = true       
    }
}

let clock = document.querySelector(".clock")
setInterval(()=>{

let time = new Date();
let hrs =time.getHours();
let mins = time.getMinutes();
let sec = time.getSeconds();
clock.innerHTML = (`${hrs}:${mins}:${sec}`)
},1000)















// let display = document.querySelector(".clock")
// // let time_clock =document.querySelector(".time")
// console.log(display)



// display.addEventListener("click",()=>{
//     console.log("hello bro")
//     function satrtClock(){
//         let time =new Date();

//     let hrs = time.getHours();
//     let mins = time.getMinutes();
//     let sec = time.getSeconds();

//     console.log(`${hrs}:${mins};${sec}`);
//     // time_clock.innerHTML= `${hrs}:${mins};${sec}`

//     }
//     setInterval(()=>{
//         satrtClock();
//     },1000);
// })


